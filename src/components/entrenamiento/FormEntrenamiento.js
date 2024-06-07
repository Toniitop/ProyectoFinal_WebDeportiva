import { Suspense } from 'react';
import ListaJugadores from '../jugador/ListaJugadores';
import ListaEntrenadores from './ListaEntrenadores';

function Form({ children, action, entrenamiento, disabled = false }) {
    return (
        <form action={action} className="container mx-auto p-4 max-w-md bg-white shadow-md rounded-md">
            <input type='hidden' name='id' value={entrenamiento?.id} />
            <fieldset disabled={disabled} className="mb-4">
                <div className="mb-4">
                    <label htmlFor='fecha' className="block font-bold text-xl text-black">Fecha:</label>
                    <input
                        type='date'
                        id='fecha'
                        name='fecha'
                        placeholder='dd/mm/aaaa'
                        defaultValue={entrenamiento?.fecha ? entrenamiento.fecha.toISOString().split('T')[0] : ''}
                        required
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='notas' className="block font-bold text-xl text-black">Notas:</label>
                    <textarea
                        id='notas'
                        name='notas'
                        placeholder='Notas Entrenamiento'
                        defaultValue={entrenamiento?.notas}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
            </fieldset>
            <Suspense fallback={'Loading ...'}>
                <div className="overflow-x-auto">
                    <ListaJugadores entrenamientoId={entrenamiento?.id} disabled={disabled} />
                </div>
                <hr />
                <div className="overflow-x-auto">
                    <ListaEntrenadores entrenamientoId={entrenamiento?.id} disabled={disabled} />
                </div>
            </Suspense>
            {children}
        </form >
    )
}

export default Form