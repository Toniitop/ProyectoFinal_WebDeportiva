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

//JUGADORES

export async function getJugadores() {
    try {
        const jugadores = await prisma.jugador.findMany()
        return jugadores;
    } catch (error) {
        return null;
    }
}

export async function getJugador(id) {
    try {
        const jugador = await prisma.jugador.findUnique({
            where: { id },
            include: {
                entrenadores: true
            }
        });
        console.log(jugador);
        return jugador;
    } catch (error) {
        return null;
    }
}

export async function newJugador(formData) {
    try {
        const nombre = formData.get('nombre');
        const apellidos = formData.get("apellidos");
        const fechaNacimiento = new Date (formData.get("fecha_nacimiento"));
        const dni = formData.get("dni");
    } catch (error) {
        
    }
}

//ENTRENADORES

async function getEntrenadoresIds() {
    const entIds = await prisma.entrenador.findMany({
        select: { id: true },
    });
    return entIds.map((e) => e.id)
}