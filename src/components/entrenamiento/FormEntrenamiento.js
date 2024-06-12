import { Suspense } from 'react';
import ListaJugadores from '../jugador/ListaJugadores';
import ListaEntrenadores from './ListaEntrenadores';

function Form({ children, action, entrenamiento, disabled = false }) {
    return (
        <form action={action} className="container mx-auto p-6 max-w-lg bg-green-200 shadow-lg rounded-lg mt-8">
            <input type='hidden' name='id' value={entrenamiento?.id} />
            <fieldset disabled={disabled} className="space-y-6">
                <div>
                    <label htmlFor='fecha' className="block text-lg font-semibold text-gray-700">Fecha:</label>
                    <input
                        type='date'
                        id='fecha'
                        name='fecha'
                        placeholder='dd/mm/aaaa'
                        defaultValue={entrenamiento?.fecha ? entrenamiento.fecha.toISOString().split('T')[0] : ''}
                        required
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='notas' className="block text-lg font-semibold text-gray-700">Notas:</label>
                    <textarea
                        id='notas'
                        name='notas'
                        placeholder='Notas Entrenamiento'
                        defaultValue={entrenamiento?.notas}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
            </fieldset>
            <Suspense fallback={'Loading ...'}>
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Jugadores</h2>
                    <div className="overflow-x-auto bg-green-100 rounded-lg p-4 shadow-inner">
                        <ListaJugadores entrenamientoId={entrenamiento?.id} disabled={disabled} />
                    </div>
                </div>
                <hr className="my-6 border-gray-300" />
                <div>
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Entrenadores</h2>
                    <div className="overflow-x-auto bg-green-100 rounded-lg p-4 shadow-inner">
                        <ListaEntrenadores entrenamientoId={entrenamiento?.id} disabled={disabled} />
                    </div>
                </div>
            </Suspense>
            {children}
        </form>
    );
}

export default Form;
