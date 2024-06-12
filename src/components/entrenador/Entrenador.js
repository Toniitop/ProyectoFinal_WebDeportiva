function Entrenador({ children, entrenador }) {
    return (
        <div className="bg-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
            <div className="">
                <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-cyan-600 transition duration-300">{entrenador.nombre} {entrenador.apellido}</h2>
                <div className="text-sm text-gray-600">
                    <p className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className='mr-2'>
                            <path fill="#0284c7" d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0" />
                        </svg>
                        {entrenador.telefono}
                    </p>
                    <p className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='mr-2'>
                            <path fill="#eab308" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
                        </svg>
                        {entrenador.email1}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Entrenador