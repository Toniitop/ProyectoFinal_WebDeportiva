function Form({ children, action, entrenador, disabled = false }) {
    return (
        <form action={action} className="container mx-auto p-6 max-w-lg bg-green-100 shadow-lg rounded-lg">
            <input type='hidden' name='id' value={entrenador?.id} />
            <fieldset disabled={disabled} className="space-y-6">
                <div>
                    <label htmlFor='nombre' className="block text-lg font-semibold text-gray-700">Nombre:</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={entrenador?.nombre}
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
                        defaultValue={entrenador?.apellido}
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
                        defaultValue={entrenador?.fechaNacimiento ? entrenador.fechaNacimiento.toISOString().split('T')[0] : ''}
                        required
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='localidad' className="block text-lg font-semibold text-gray-700">Localidad:</label>
                    <input
                        type='text'
                        id='localidad'
                        name='localidad'
                        placeholder='Localidad'
                        defaultValue={entrenador?.localidad}
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
                        defaultValue={entrenador?.telefono}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='tallaCamiseta' className="block text-lg font-semibold text-gray-700">Talla de Camiseta:</label>
                    <select
                        id='tallaCamiseta'
                        name='tallaCamiseta'
                        placeholder='Talla de Camiseta'
                        defaultValue={entrenador?.tallaCamiseta}
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
                        defaultValue={entrenador?.tallaChandal}
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
                        defaultValue={entrenador?.tallaSudadera}
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
                    <label htmlFor='email1' className="block text-lg font-semibold text-gray-700">Email 1:</label>
                    <input
                        type='email'
                        id='email1'
                        name='email1'
                        placeholder='entrenador@mail.com'
                        defaultValue={entrenador?.email1}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='email2' className="block text-lg font-semibold text-gray-700">Email 2:</label>
                    <input
                        type='email'
                        id='email2'
                        name='email2'
                        placeholder='entrenador@mail.com'
                        defaultValue={entrenador?.email2}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='titulacion' className="block text-lg font-semibold text-gray-700">Titulación:</label>
                    <textarea
                        id='titulacion'
                        name='titulacion'
                        placeholder='Titulación'
                        defaultValue={entrenador?.titulacion}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div>
                    <label htmlFor='notas' className="block text-lg font-semibold text-gray-700">Notas:</label>
                    <textarea
                        id='notas'
                        name='notas'
                        placeholder='Notas'
                        defaultValue={entrenador?.notas}
                        className="w-full text-lg border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300 mb-8"
                    />
                </div>
            </fieldset>
            {children}
        </form>
    );
}

export default Form;
