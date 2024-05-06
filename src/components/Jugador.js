function Jugador ({children, jugador}) {
    return (
        <div className="card">
            <p><strong>{jugador.nombre} {jugador.apellidos}</strong></p>
            <p>{jugador.localidad}</p>
            <p>{jugador.telefono}</p>
            <p>{jugador.fechaNacimiento.toLocaleDateString('es-ES')}</p>
            {children}
        </div>
    )
}

export default Jugador;