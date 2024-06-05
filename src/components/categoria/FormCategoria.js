function Form({ children, action, categoria, disabled = false }) {

    return (
        <form action={action} className="container mx-auto p-4 max-w-md bg-white shadow-md rounded-md">
            <input type='hidden' name='id' value={categoria?.id} />
            <fieldset disabled={disabled} className="mb-4">
                <div className="mb-4">
                    <label htmlFor='nombre' className="block font-bold text-xl text-black mb-2">Categoria:</label>
                    <select
                        id='nombre'
                        name='nombre'
                        defaultValue={categoria?.nombre}
                        required
                        className="w-full text-xl text-center border-2 border-gray-300 py-2 px-3 bg-white rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
                    >
                        <option value='' disabled>Seleccione una categoría</option>
                        <option value='Bebe'>Bebe</option>
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
            {children}
        </form>
    )
}

export default Form

//si funciona meter tailwind