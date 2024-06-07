function Entrenamiento ({ children, entrenamiento }) {
    return (
        <div className='card'>
            <p>📅 <strong>{entrenamiento.fecha.toLocaleDateString('es-ES')}</strong></p>
            {children}
        </div>
    )
}

export default Entrenamiento 