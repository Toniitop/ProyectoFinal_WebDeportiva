import { Suspense } from 'react';
import ListaCategorias from '../categoria/ListaCategorias';

const FormularioJugador = ({ children, action, jugador, disabled = false }) => {
    return (
        <form action={action} className="container mx-auto p-6 max-w-lg bg-green-200 shadow-lg rounded-lg">
            <input type='hidden' name='id' value={jugador?.id} />
            <fieldset disabled={disabled} className="space-y-6">
                <div>
                    <label htmlFor='nombre' className="block text-lg font-semibold text-gray-700">Nombre:</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={jugador?.nombre}
                        autoFocus
                        required
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='apellido' className="block text-lg font-semibold text-gray-700">Apellido:</label>
                    <input
                        type='text'
                        id='apellido'
                        name='apellido'
                        placeholder='Apellido'
                        defaultValue={jugador?.apellido}
                        required
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='fechaNacimiento' className="block text-lg font-semibold text-gray-700">Fecha Nacimiento:</label>
                    <input
                        type='date'
                        id='fechaNacimiento'
                        name='fechaNacimiento'
                        placeholder='dd/mm/aaaa'
                        defaultValue={jugador?.fechaNacimiento ? jugador.fechaNacimiento.toISOString().split('T')[0] : ''}
                        required
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='lateralidad' className="block text-lg font-semibold text-gray-700">Lateralidad:</label>
                    <select
                        id='lateralidad'
                        name='lateralidad'
                        placeholder='Lateralidad'
                        defaultValue={jugador?.lateralidad}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Seleccione lateralidad:</option>
                        <option value="Izquierda">Izquierda</option>
                        <option value="Derecha">Derecha</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='posicionPrincipal' className="block text-lg font-semibold text-gray-700">Posición Principal:</label>
                    <select
                        id='posicionPrincipal'
                        name='posicionPrincipal'
                        placeholder='Posición Principal'
                        defaultValue={jugador?.posicionPrincipal}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
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
                <div>
                    <label htmlFor='posicionSecundaria' className="block text-lg font-semibold text-gray-700">Posición Secundaria:</label>
                    <select
                        id='posicionSecundaria'
                        name='posicionSecundaria'
                        placeholder='Posición Secundaria'
                        defaultValue={jugador?.posicionSecundaria}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
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
                <div>
                    <label htmlFor='genero' className="block text-lg font-semibold text-gray-700">Género:</label>
                    <select
                        id='genero'
                        name='genero'
                        defaultValue={jugador?.genero}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona el Género</option>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='localidad' className="block text-lg font-semibold text-gray-700">Localidad:</label>
                    <input
                        type='text'
                        id='localidad'
                        name='localidad'
                        placeholder='Localidad'
                        defaultValue={jugador?.localidad}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='telefono' className="block text-lg font-semibold text-gray-700">Teléfono:</label>
                    <input
                        type='text'
                        id='telefono'
                        name='telefono'
                        placeholder='123456789'
                        defaultValue={jugador?.telefono}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='telefonoPadre' className="block text-lg font-semibold text-gray-700">Teléfono del Padre:</label>
                    <input
                        type='text'
                        id='telefonoPadre'
                        name='telefonoPadre'
                        placeholder='Teléfono del Padre'
                        defaultValue={jugador?.telefonoPadre}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='telefonoMadre' className="block text-lg font-semibold text-gray-700">Teléfono de la Madre:</label>
                    <input
                        type='text'
                        id='telefonoMadre'
                        name='telefonoMadre'
                        placeholder='Teléfono de la Madre'
                        defaultValue={jugador?.telefonoMadre}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='dorsal' className="block text-lg font-semibold text-gray-700">Dorsal:</label>
                    <input
                        type='text'
                        id='dorsal'
                        name='dorsal'
                        placeholder='Dorsal'
                        defaultValue={jugador?.dorsal}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='tallaCamiseta' className="block text-lg font-semibold text-gray-700">Talla de Camiseta:</label>
                    <select
                        id='tallaCamiseta'
                        name='tallaCamiseta'
                        placeholder='Talla de Camiseta'
                        defaultValue={jugador?.tallaCamiseta}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona la talla:</option>
                        <option value="XXS">XXS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='tallaChandal' className="block text-lg font-semibold text-gray-700">Talla de Chándal:</label>
                    <select
                        id='tallaChandal'
                        name='tallaChandal'
                        placeholder='Talla de Chándal'
                        defaultValue={jugador?.tallaChandal}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona la talla:</option>
                        <option value="XXS">XXS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='tallaSudadera' className="block text-lg font-semibold text-gray-700">Talla de Sudadera:</label>
                    <select
                        id='tallaSudadera'
                        name='tallaSudadera'
                        placeholder='Talla de Sudadera'
                        defaultValue={jugador?.tallaSudadera}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    >
                        <option value="">Selecciona la talla:</option>
                        <option value="XXS">XXS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='pie' className="block text-lg font-semibold text-gray-700">Nº Pie:</label>
                    <input
                        type='text'
                        id='pie'
                        name='pie'
                        placeholder='Nº Pie'
                        defaultValue={jugador?.pie}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='email1' className="block text-lg font-semibold text-gray-700">Email 1:</label>
                    <input
                        type='email'
                        id='email1'
                        name='email1'
                        placeholder='jugador@mail.com'
                        defaultValue={jugador?.email1}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='email2' className="block text-lg font-semibold text-gray-700">Email 2:</label>
                    <input
                        type='email'
                        id='email2'
                        name='email2'
                        placeholder='jugador@mail.com'
                        defaultValue={jugador?.email2}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='nombrePadre' className="block text-lg font-semibold text-gray-700">Nombre del Padre:</label>
                    <input
                        type='text'
                        id='nombrePadre'
                        name='nombrePadre'
                        placeholder='Nombre del Padre'
                        defaultValue={jugador?.nombrePadre}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='nombreMadre' className="block text-lg font-semibold text-gray-700">Nombre de la Madre:</label>
                    <input
                        type='text'
                        id='nombreMadre'
                        name='nombreMadre'
                        placeholder='Nombre de la Madre'
                        defaultValue={jugador?.nombreMadre}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='goles' className="block text-lg font-semibold text-gray-700">Nº Goles:</label>
                    <input
                        type='number'
                        id='goles'
                        name='goles'
                        placeholder='Nº Goles'
                        defaultValue={jugador?.goles}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='fechaExamenMedico' className="block text-lg font-semibold text-gray-700">Fecha de Examen Médico:</label>
                    <input
                        type='date'
                        id='fechaExamenMedico'
                        name='fechaExamenMedico'
                        placeholder='dd/mm/aaaa'
                        defaultValue={jugador?.fechaExamenMedico ? jugador.fechaExamenMedico.toISOString().split('T')[0] : ''}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='notas' className="block text-lg font-semibold text-gray-700">Notas:</label>
                    <textarea
                        id='notas'
                        name='notas'
                        placeholder='Notas'
                        defaultValue={jugador?.notas}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
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
