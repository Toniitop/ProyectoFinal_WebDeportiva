import { Suspense } from "react";
import ListaCategoriasJugadores from "./ListaCategoriaJugadores";

function Form({ children, action, categoria, disabled = false }) {
    return (
        <form action={action} className="container mx-auto p-6 max-w-lg bg-green-100 shadow-lg rounded-lg">
            <input type='hidden' name='id' value={categoria?.id} />
            <fieldset disabled={disabled} className="space-y-6">
                <div>
                    <label htmlFor='nombre' className="block text-lg font-semibold text-gray-700 mb-2">Categoría:</label>
                    <select
                        id='nombre'
                        name='nombre'
                        defaultValue={categoria?.nombre}
                        required
                        className="w-full text-lg border-2 border-gray-300 py-2 px-3 bg-green-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                    >
                        <option value='' disabled>Seleccione una categoría</option>
                        <option value='Bebe'>Bebé</option>
                        <option value='Prebenjamin'>Pre-benjamín</option>
                        <option value='Benjamin'>Benjamín</option>
                        <option value='Alevin'>Alevín</option>
                        <option value='Infantil'>Infantil</option>
                        <option value='Cadete'>Cadete</option>
                        <option value='Juvenil'>Juvenil</option>
                        <option value='Senior'>Senior</option>
                        <option value='Inactivo'>Inactivo</option>
                    </select>
                </div>
            </fieldset>
            <Suspense fallback={'Loading ...'}>
                <div className="mt-6 overflow-x-auto bg-grenn-200 rounded-lg p-4 shadow-inner">
                    <ListaCategoriasJugadores categoriaId={categoria?.id} disabled={disabled} />
                </div>
            </Suspense>
            {children}
        </form>
    );
}

export default Form;
