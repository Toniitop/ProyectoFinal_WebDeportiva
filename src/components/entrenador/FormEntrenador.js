function Form({ children, action, entrenador, disabled = false }) {

    return (
        <form action={action} className="container mx-auto p-4 max-w-md bg-white shadow-md rounded-md">
            <input type='hidden' name='id' value={entrenador?.id} />
            <fieldset disabled={disabled} className="mb-4">
                <div className="mb-4">
                    <label htmlFor='nombre' className="block font-bold text-xl text-black">Nombre:</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        placeholder='Nombre'
                        defaultValue={entrenador?.nombre}
                        autoFocus
                        required
                        className="w-full text-xl text-center w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <br />
                <div className="mb-4">
                    <label htmlFor='apellido' className="block font-bold text-xl text-black">Apellido:</label>
                    <input
                        type='text'
                        id='apellido'
                        name='apellido'
                        placeholder='Apellido'
                        defaultValue={entrenador?.apellido}
                        autoFocus
                        required
                        className="w-full text-xl text-center w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <br />
                <div className="mb-4">
                    <label htmlFor='fechaNacimiento' className="block font-bold text-xl text-black">Fecha Nacimiento:</label>
                    <input
                        type='date'
                        id='fechaNacimiento'
                        name='fechaNacimiento'
                        placeholder='dd/mm//aaaa'
                        defaultValue={entrenador?.fechaNacimiento ? entrenador.fechaNacimiento.toISOString().split('T')[0] : ''}
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
                        defaultValue={entrenador?.dni}
                        required
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='foto' className="block font-bold text-xl text-black">Foto:</label>
                    <input
                        type='text'
                        id='foto'
                        name='foto'
                        placeholder=''
                        defaultValue={entrenador?.foto}
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
                        defaultValue={entrenador?.localidad}
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
                        defaultValue={entrenador?.telefono}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='tallaCamiseta' className="block font-bold text-xl text-black">Talla de Camiseta:</label>
                    <select
                        id='tallaCamiseta'
                        name='tallaCamiseta'
                        placeholder='Talla de Camiseta'
                        defaultValue={entrenador?.tallaCamiseta}
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
                        defaultValue={entrenador?.tallaChandal}
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
                        defaultValue={entrenador?.tallaSudadera}
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
                    <label htmlFor='email1' className="block font-bold text-xl text-black">Email 1:</label>
                    <input
                        type='email'
                        id='email1'
                        name='email1'
                        placeholder='entrenador@mail.com'
                        defaultValue={entrenador?.email1}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='email2' className="block font-bold text-xl text-black">Email 2:</label>
                    <input
                        type='email'
                        id='email2'
                        name='email2'
                        placeholder='entrenador@mail.com'
                        defaultValue={entrenador?.email2}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='titulacion' className="block font-bold text-xl text-black">Titulación:</label>
                    <textarea
                        id='titulacion'
                        name='titulacion'
                        placeholder='Titulación'
                        defaultValue={entrenador?.notas}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor='notas' className="block font-bold text-xl text-black">Notas:</label>
                    <textarea
                        id='notas'
                        name='notas'
                        placeholder='Notas'
                        defaultValue={entrenador?.notas}
                        className="w-full text-xl text-center border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                </div>
            </fieldset>
            {children}
        </form>
    );
}

export default Form;
