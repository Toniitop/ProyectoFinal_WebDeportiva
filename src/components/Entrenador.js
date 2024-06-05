function Entrenador({ children, entrenador }) {
    return (
        <div className='card'>
            <p><strong>{entrenador.nombre} {entrenador.apellido}</strong></p>
            <p>Teléfono: {entrenador.telefono}</p>
            <p>Categoría: {entrenador.categoriaNombre}</p>
            {children}
        </div>
    )
}

export default Entrenador