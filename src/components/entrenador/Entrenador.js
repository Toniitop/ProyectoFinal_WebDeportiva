function Entrenador({ children, entrenador }) {
    return (
        <div className='card'>
            <p>Nombre: <strong>{entrenador.nombre} {entrenador.apellido}</strong></p>
            <p>📱 {entrenador.telefono}</p>
            <p>📧 {entrenador.email1}</p>
            {children}
        </div>
    )
}

export default Entrenador