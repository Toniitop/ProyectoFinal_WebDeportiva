'use server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { signIn, signOut } from '@/auth';
import { getUserByEmail } from '@/lib/data'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// REGISTER

export async function register(formData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario ya está registrado
    const user = await getUserByEmail(email);

    if (user) {
        return { error: '⛔ El email ya está registrado' }
    }

    // Encriptamos password 
    const hashedPassword = await bcrypt.hash(password, 10)

    // Guardamos credenciales en base datos
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "✅ Registro correcto" }
}

// LOGIN credentials

export async function login(formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    // Comprobamos si el usuario está registrado
    const user = await getUserByEmail(email);

    if (!user) {
        return { error: 'Usuario no registrado.' }
    }

    // Comparamos password 
    const matchPassword = await bcrypt.compare(password, user.password)

    if (user && matchPassword) {  // && user.emailVerified
        await signIn('credentials',
            {
                email, password,
                redirectTo: globalThis.callbackUrl
                // redirectTo: user.role == 'ADMIN' ? '/admin' : '/dashboard'
            })
        return { success: "Inicio de sesión correcto" }
    } else {
        return { error: 'Credenciales incorrectas.' }
    }
}

// LOGIN google
export async function loginGoogle() {
    try {
        await signIn('google', { redirectTo: globalThis.callbackUrl })
    } catch (error) {
        console.log(error);
        throw error
    }
}

// LOGOUT
export async function logout() {
    try {
        await signOut({ redirectTo: '/' })
    } catch (error) {
        throw error
    }
}


//BACKEND DE LAS CRUD

// Obtener array con IDs de todas las categorias
async function getCategoriasIds() {
    const categoriasIds = await prisma.categoria.findMany({
        select: { id: true }
    })
    return categoriasIds.map(categoria => categoria.id)
}

async function getEntrenadoresIds() {
    const entrenadoresIds = await prisma.entrenador.findMany({
        select: { id: true }
    })
    return entrenadoresIds.map(entrenador => entrenador.id)
}



// JUGADORES

export async function getJugadores() {
    try {
        const jugadores = await prisma.jugador.findMany()
        console.log(jugadores);
        return jugadores;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getJugador(id) {  // obtener jugadores con su categoria
    try {
        const jugador = await prisma.jugador.findUnique({
            where: { id },
            include: { categoria: true }
        })

        console.log(jugador);
        return jugador;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

export async function newJugador(formData) {
    try {
        const nombre = formData.get('nombre');
        const apellido = formData.get('apellido');
        const fechaNacimiento = new Date(formData.get('fechaNacimiento'));
        const lateralidad = formData.get('lateralidad');
        const posicionPrincipal = formData.get('posicionPrincipal');
        const posicionSecundaria = formData.get('posicionSecundaria');
        const genero = formData.get('genero');
        const localidad = formData.get('localidad');
        const telefono = formData.get('telefono');
        const telefonoPadre = formData.get('telefonoPadre');
        const telefonoMadre = formData.get('telefonoMadre');
        const dorsal = formData.get('dorsal');
        const tallaCamiseta = formData.get('tallaCamiseta');
        const tallaChandal = formData.get('tallaChandal');
        const tallaSudadera = formData.get('tallaSudadera');
        const pie = formData.get('pie');
        const email1 = formData.get('email1');
        const email2 = formData.get('email2');
        const nombrePadre = formData.get('nombrePadre');
        const nombreMadre = formData.get('nombreMadre');
        const goles = Number(formData.get('goles'));
        const notas = formData.get('notas');
        const fechaExamenMedico = new Date(formData.get('fechaExamenMedico'));


        const jugador = await prisma.jugador.create({
            data: {
                nombre, apellido, fechaNacimiento,
                lateralidad, posicionPrincipal, posicionSecundaria,
                genero, localidad, telefono, telefonoPadre, telefonoMadre,
                dorsal, tallaCamiseta, tallaChandal, tallaSudadera, pie,
                email1, email2, nombrePadre, nombreMadre, goles, notas,
                fechaExamenMedico
            },
        })

        console.log(jugador);
        revalidatePath('/jugadores')
    } catch (error) {
        console.log(error);
    }
    redirect('/jugadores');
}

export async function editJugador(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre');
    const apellido = formData.get('apellido');
    const fechaNacimiento = new Date(formData.get('fechaNacimiento'));
    const lateralidad = formData.get('lateralidad');
    const posicionPrincipal = formData.get('posicionPrincipal');
    const posicionSecundaria = formData.get('posicionSecundaria');
    const genero = formData.get('genero');
    const localidad = formData.get('localidad');
    const telefono = formData.get('telefono');
    const telefonoPadre = formData.get('telefonoPadre');
    const telefonoMadre = formData.get('telefonoMadre');
    const dorsal = formData.get('dorsal');
    const tallaCamiseta = formData.get('tallaCamiseta');
    const tallaChandal = formData.get('tallaChandal');
    const tallaSudadera = formData.get('tallaSudadera');
    const pie = formData.get('pie');
    const email1 = formData.get('email1');
    const email2 = formData.get('email2');
    const nombrePadre = formData.get('nombrePadre');
    const nombreMadre = formData.get('nombreMadre');
    const goles = Number(formData.get('goles'));
    const notas = formData.get('notas');
    const fechaExamenMedico = new Date(formData.get('fechaExamenMedico'));

    // Array con IDs de todos las categorias
    const ids = await getCategoriasIds()
    console.log('IDs ', ids);

    try {
        const jugador = await prisma.jugador.update({
            where: { id },
            data: {
                nombre, apellido, fechaNacimiento,
                lateralidad, posicionPrincipal, posicionSecundaria,
                genero, localidad, telefono, telefonoPadre, telefonoMadre,
                dorsal, tallaCamiseta, tallaChandal, tallaSudadera, pie,
                email1, email2, nombrePadre, nombreMadre, goles, notas,
                fechaExamenMedico
            },
        })

        console.log(jugador);
        revalidatePath('/jugadores')
    } catch (error) {
        console.log(error);
    }
    redirect('/jugadores');
}

export async function deleteJugador(formData) {
    try {
        const id = Number(formData.get('id'))

        const jugador = await prisma.jugador.delete({
            where: { id },
        })
        console.log(jugador);
        revalidatePath('/jugadores')
    } catch (error) {
        console.log(error);
    }

    redirect('/jugadores');
}


// ENTRENADORES 

export async function getEntrenadores() {
    try {
        const entrenadores = await prisma.entrenador.findMany()
        return entrenadores;
    } catch (error) {
        return null;
    }
}

export async function getEntrenador(id) {  // obtener entrenador con entrenamientos
    try {
        const entrenador = await prisma.entrenador.findUnique({
            where: { id },
            include: { entrenamientos: true } //se refiere al campo de la tabla entrenamiento
        })

        console.log(entrenador);
        return entrenador;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

export async function newEntrenador(formData) {
    try {
        const nombre = formData.get('nombre');
        const apellido = formData.get('apellido');
        const fechaNacimiento = new Date(formData.get('fechaNacimiento'));
        const localidad = formData.get('localidad');
        const telefono = formData.get('telefono');
        const tallaCamiseta = formData.get('tallaCamiseta');
        const tallaChandal = formData.get('tallaChandal');
        const tallaSudadera = formData.get('tallaSudadera');
        const email1 = formData.get('email1');
        const email2 = formData.get('email2');
        const titulacion = formData.get('titulacion');
        const notas = formData.get('notas');

        const entrenador = await prisma.entrenador.create({
            data: {
                nombre, apellido, fechaNacimiento, localidad,
                telefono, tallaCamiseta, tallaChandal, tallaSudadera,
                email1, email2, titulacion, notas
            },
        })

        console.log(entrenador);
        revalidatePath('/entrenadores')
    } catch (error) {
        console.log(error);
    }
    redirect('/entrenadores');
}

export async function editEntrenador(formData) {
    const id = Number(formData.get('id'));
    const nombre = formData.get('nombre');
    const apellido = formData.get('apellido');
    const fechaNacimiento = new Date(formData.get('fechaNacimiento'));
    const localidad = formData.get('localidad');
    const telefono = formData.get('telefono');
    const tallaCamiseta = formData.get('tallaCamiseta');
    const tallaChandal = formData.get('tallaChandal');
    const tallaSudadera = formData.get('tallaSudadera');
    const email1 = formData.get('email1');
    const email2 = formData.get('email2');
    const titulacion = formData.get('titulacion');
    const notas = formData.get('notas');

    try {
        const entrenador = await prisma.entrenador.update({
            where: { id },
            data: {
                nombre, apellido, fechaNacimiento, localidad,
                telefono, tallaCamiseta, tallaChandal, tallaSudadera,
                email1, email2, titulacion, notas
            },
        })
        console.log(entrenador);
        revalidatePath('/entrenadores')
    } catch (error) {
        console.log(error);
    }
    redirect('/entrenadores');
}

export async function deleteEntrenador(formData) {
    try {
        const id = Number(formData.get('id'))

        const entrenador = await prisma.entrenador.delete({
            where: { id },
        })

        console.log(entrenador);
        revalidatePath('/entrenadores')
    } catch (error) {
        console.log(error);
    }
    redirect('/entrenadores');
}


// CATEGORIAS

export async function getCategorias() {
    try {
        const categorias = await prisma.categoria.findMany()
        return categorias;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

export async function getCategoria(id) {  // obtener categoria con jugadores
    try {
        const categoria = await prisma.categoria.findUnique({
            where: { id },
            include: { jugadores: true } //se refiere al campo de la tabla categoria
        })

        console.log(categoria);
        return categoria;
    } catch (error) {
        // console.log(error);  
        return null;
    }
}

export async function newCategoria(formData) {
    try {
        const nombre = formData.get('nombre')

        const categoria = await prisma.categoria.create({
            data: { nombre },
        })

        console.log(categoria);
        revalidatePath('/categorias')
    } catch (error) {
        console.log(error);
    }
    redirect('/categorias');
}

export async function editCategoria(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')

    try {
        const categoria = await prisma.categoria.update({
            where: { id },
            data: { nombre },
        })
        console.log(categoria);
        revalidatePath('/categorias')
    } catch (error) {
        console.log(error);
    }
    redirect('/categorias');
}

export async function deleteCategoria(formData) {
    try {
        const id = Number(formData.get('id'))

        const categoria = await prisma.categoria.delete({
            where: { id },
        })
        console.log(categoria);
        revalidatePath('/categorias')
    } catch (error) {
        console.log(error);
    }

    redirect('/categorias');
}



//ENTRENAMIENTOS


export async function getEntrenamientos() {
    try {
        const entrenamientos = await prisma.entrenamiento.findMany()
        return entrenamientos;
    } catch (error) {
        return null;
    }
}

export async function getEntrenamiento(id) {
    try {
        const entrenamiento = await prisma.entrenamiento.findUnique({
            where: { id },
            include: {
                jugadores: true,
                entrenador: true
            }
        })
        console.log(entrenamiento);
        return entrenamiento;
    } catch (error) {
        return null;
    }
}

export async function newEntrenamiento(formData) {
    try {
        const fecha = new Date(formData.get('fecha'));
        const notas = formData.get('notas');

        // // Array con IDs de todos los entrenadores
        // const ids = await getEntrenadoresIds()
        // console.log('IDs ', ids);

        // const checks = ids.map(id => formData.get(id.toString()))
        //     .filter(id => id !== null)
        //     .map(id => Number(id))
        // console.log('CHECKS ', checks);

        // const connect = checks.map(id => { return { id: Number(id) } })
        // console.log('CONNECT ', connect);

        const entrenamiento = await prisma.entrenamiento.create({
            data: { 
                fecha, 
                notas, 
                // entrenador: { connect },
            },
        })

        console.log(entrenamiento);
        revalidatePath('/entrenamientos')
    } catch (error) {
        console.log(error);
    }
    redirect('/entrenamientos');
}

export async function editEntrenamiento(formData) {
    const id = Number(formData.get('id'));
    const fecha = new Date(formData.get('fecha'));
    const notas = formData.get('notas');

    // // Array con IDs de todos los entrenadores
    // const ids = await getEntrenadoresIds()
    // console.log('IDs ', ids);

    // const checks = ids.map(id => formData.get(id.toString()))
    //     .filter(id => id !== null)
    //     .map(id => Number(id))
    // console.log('CHECKS ', checks);

    // const connect = checks.map(id => { return { id: Number(id) } })
    // console.log('CONNECT ', connect);

    // const difference = ids.filter(id => !checks.includes(id));
    // const disconnect = difference.map(id => { return { id: Number(id) } })
    // console.log('DISCONNECT ', disconnect);

    try {
        const entrenamiento = await prisma.entrenamiento.update({
            where: { id },
            data: {
                fecha,
                notas,
                // entrenador: { connect, disconnect },
            },
        })
        console.log(entrenamiento);
        revalidatePath('/entrenamientos')
    } catch (error) {
        console.log(error);
    }
    redirect('/entrenamientos');
}

export async function deleteEntrenamiento(formData) {
    try {
        const id = Number(formData.get('id'))

        const entrenamiento = await prisma.entrenamiento.delete({
            where: {
                id: id,
            },
        })
        console.log(entrenamiento);
        revalidatePath('/entrenamientos')
    } catch (error) {
        console.log(error);
    }
    redirect('/entrenamientos');
}