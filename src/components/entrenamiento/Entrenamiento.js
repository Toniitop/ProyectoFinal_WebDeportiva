function Entrenamiento({ children, entrenamiento }) {
    return (
        <div className='text-sm text-gray-600 mb-4'>
            <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='mr-2'>
                    <path fill="#be1523" d="M11 14v-2h2v2zm-4 0v-2h2v2zm8 0v-2h2v2zm-4 4v-2h2v2zm-4 0v-2h2v2zm8 0v-2h2v2zM3 22V4h3V2h2v2h8V2h2v2h3v18zm2-2h14V10H5z" />
                </svg>
                <strong>{entrenamiento.fecha.toLocaleDateString('es-ES')}</strong>
            </p>
            {children}
        </div>
    )
}

export default Entrenamiento 