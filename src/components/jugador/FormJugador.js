import { Suspense } from 'react';
import ListaCategorias from '../categoria/ListaCategorias';

const FormularioJugador = ({ children, action, jugador, disabled = false }) => {
    return (
        <form action={action} className="container mx-auto p-4 max-w-md bg-white shadow-md rounded-md">
            <input type='hidden' name='id' value={jugador?.id} />
            <fieldset disabled={disabled} className="mb-4">
                <div className="mb-4">
                    <label htmlFor='nombre' className="block font-bold text-xl text-black">Nombre:</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={jugador?.nombre}
                        autoFocus
                        required
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='apellido' className="block font-bold text-xl text-black">Apellido:</label>
                    <input
                        type='text'
                        id='apellido'
                        name='apellido'
                        placeholder='Apellido'
                        defaultValue={jugador?.apellido}
                        required
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='fechaNacimiento' className="block font-bold text-xl text-black">Fecha Nacimiento:</label>
                    <input
                        type='date'
                        id='fechaNacimiento'
                        name='fechaNacimiento'
                        placeholder='dd/mm/aaaa'
                        defaultValue={jugador?.fechaNacimiento ? jugador.fechaNacimiento.toISOString().split('T')[0] : ''}
                        required
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                {/* <div className="mb-4">
                    <label htmlFor='dni' className="block font-bold text-xl text-black">DNI:</label>
                    <input
                        type='text'
                        id='dni'
                        name='dni'
                        placeholder='12345678X'
                        defaultValue={jugador?.dni}
                        required
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div> */}
                <div className="mb-4">
                    <label htmlFor='lateralidad' className="block font-bold text-xl text-black">Lateralidad:</label>
                    <select
                        id='lateralidad'
                        name='lateralidad'
                        placeholder='Lateralidad'
                        defaultValue={jugador?.lateralidad}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Seleccione lateralidad:</option>
                        <option value="Izquierda">Izquierda</option>
                        <option value="Derecha">Derecha</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor='posicionPrincipal' className="block font-bold text-xl text-black">Posición Principal:</label>
                    <select
                        id='posicionPrincipal'
                        name='posicionPrincipal'
                        placeholder='Posición Principal'
                        defaultValue={jugador?.posicionPrincipal}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Seleccione Posición:</option>
                        <option value="Portero">Portero</option>
                        <option value="Defensa Central">Defensa Central</option>
                        <option value="Defensa Lateral">Defensa Lateral</option>
                        <option value="Centrocampista Defensivo">Centrocampista Defensivo</option>
                        <option value="Mediocentro">Mediocentro</option>
                        <option value="Mediapunta">Mediapunta</option>
                        <option value="Interior Izquierda">Interior Izquierda</option>
                        <option value="Interior Derecha">Interior Derecha</option>
                        <option value="Delantero Centro">Delantero Centro</option>
                        <option value="Segunda Punta">Segunda Punta</option>
                        <option value="Extremo">Extremo</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor='posicionSecundaria' className="block font-bold text-xl text-black">Posición Secundaria:</label>
                    <select
                        id='posicionSecundaria'
                        name='posicionSecundaria'
                        placeholder='Posición Secundaria'
                        defaultValue={jugador?.posicionSecundaria}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Seleccione Posición:</option>
                        <option value="Portero">Portero</option>
                        <option value="Defensa Central">Defensa Central</option>
                        <option value="Defensa Lateral">Defensa Lateral</option>
                        <option value="Centrocampista Defensivo">Centrocampista Defensivo</option>
                        <option value="Mediocentro">Mediocentro</option>
                        <option value="Mediapunta">Mediapunta</option>
                        <option value="Interior Izquierda">Interior Izquierda</option>
                        <option value="Interior Derecha">Interior Derecha</option>
                        <option value="Delantero Centro">Delantero Centro</option>
                        <option value="Segunda Punta">Segunda Punta</option>
                        <option value="Extremo">Extremo</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor='genero' className="block font-bold text-xl text-black">Género:</label>
                    <select
                        id='genero'
                        name='genero'
                        defaultValue={jugador?.genero}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona el Género</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                </div>
                {/* <div className="mb-4">
                    <label htmlFor='foto' className="block font-bold text-xl text-black">Foto:</label>
                    <input
                        type='text'
                        id='foto'
                        name='foto'
                        placeholder=''
                        defaultValue={jugador?.foto}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div> */}
                <div className="mb-4">
                    <label htmlFor='localidad' className="block font-bold text-xl text-black">Localidad:</label>
                    <input
                        type='text'
                        id='localidad'
                        name='localidad'
                        placeholder='Localidad'
                        defaultValue={jugador?.localidad}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='telefono' className="block font-bold text-xl text-black">Teléfono:</label>
                    <input
                        type='text'
                        id='telefono'
                        name='telefono'
                        placeholder='123456789'
                        defaultValue={jugador?.telefono}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='telefonoPadre' className="block font-bold text-xl text-black">Teléfono del Padre:</label>
                    <input
                        type='text'
                        id='telefonoPadre'
                        name='telefonoPadre'
                        placeholder='Teléfono del Padre'
                        defaultValue={jugador?.telefonoPadre}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='telefonoMadre' className="block font-bold text-xl text-black">Teléfono de la Madre:</label>
                    <input
                        type='text'
                        id='telefonoMadre'
                        name='telefonoMadre'
                        placeholder='Teléfono de la Madre'
                        defaultValue={jugador?.telefonoMadre}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='dorsal' className="block font-bold text-xl text-black">Dorsal:</label>
                    <input
                        type='text'
                        id='dorsal'
                        name='dorsal'
                        placeholder='Dorsal'
                        defaultValue={jugador?.dorsal}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='tallaCamiseta' className="block font-bold text-xl text-black">Talla de Camiseta:</label>
                    <select
                        id='tallaCamiseta'
                        name='tallaCamiseta'
                        placeholder='Talla de Camiseta'
                        defaultValue={jugador?.tallaCamiseta}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona la talla:</option>
                        <option value="XXS">XS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor='tallaChandal' className="block font-bold text-xl text-black">Talla de Chándal:</label>
                    <select
                        id='tallaChandal'
                        name='tallaChandal'
                        placeholder='Talla de Chándal'
                        defaultValue={jugador?.tallaChandal}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona la talla:</option>
                        <option value="XXS">XS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor='tallaSudadera' className="block font-bold text-xl text-black">Talla de Sudadera:</label>
                    <select
                        id='tallaSudadera'
                        name='tallaSudadera'
                        placeholder='Talla de Sudadera'
                        defaultValue={jugador?.tallaSudadera}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona la talla:</option>
                        <option value="XXS">XS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor='pie' className="block font-bold text-xl text-black">Nº Pie:</label>
                    <input
                        type='text'
                        id='pie'
                        name='pie'
                        placeholder='Nº Pie'
                        defaultValue={jugador?.pie}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='email1' className="block font-bold text-xl text-black">Email 1:</label>
                    <input
                        type='email'
                        id='email1'
                        name='email1'
                        placeholder='jugador@mail.com'
                        defaultValue={jugador?.email1}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='email2' className="block font-bold text-xl text-black">Email 2:</label>
                    <input
                        type='email'
                        id='email2'
                        name='email2'
                        placeholder='jugador@mail.com'
                        defaultValue={jugador?.email2}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='nombrePadre' className="block font-bold text-xl text-black">Nombre del Padre:</label>
                    <input
                        type='text'
                        id='nombrePadre'
                        name='nombrePadre'
                        placeholder='Nombre del Padre'
                        defaultValue={jugador?.nombrePadre}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='nombreMadre' className="block font-bold text-xl text-black">Nombre de la Madre:</label>
                    <input
                        type='text'
                        id='nombreMadre'
                        name='nombreMadre'
                        placeholder='Nombre de la Madre'
                        defaultValue={jugador?.nombreMadre}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='goles' className="block font-bold text-xl text-black">Nº Goles:</label>
                    <input
                        type='number'
                        id='goles'
                        name='goles'
                        placeholder='Nº Goles'
                        defaultValue={jugador?.goles}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='fechaExamenMedico' className="block font-bold text-xl text-black">Fecha de Examen Médico:</label>
                    <input
                        type='date'
                        id='fechaExamenMedico'
                        name='fechaExamenMedico'
                        placeholder='dd/mm/aaaa'
                        defaultValue={jugador?.fechaExamenMedico ? jugador.fechaExamenMedico.toISOString().split('T')[0] : ''}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='notas' className="block font-bold text-xl text-black">Notas:</label>
                    <textarea
                        id='notas'
                        name='notas'
                        placeholder='Notas'
                        defaultValue={jugador?.notas}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
            </fieldset>
            <Suspense fallback={'Loading ...'}>
                <div className="overflow-x-auto">
                    <ListaCategorias jugadorId={jugador?.id} disabled={disabled} />
                </div>
            </Suspense>
            {children}
        </form>
    );
}

export default FormularioJugador;

//es cuando le das a ver, es la info del jugador que queremos ver