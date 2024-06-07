function Jugador ({children, jugador}) {
    return (
        <div className="card">
            <p>Nombre: <strong>{jugador.nombre} {jugador.apellidos}</strong></p>
            <p>📱 {jugador.telefono}</p>
            <p>📧 {jugador.email1}</p>
            <p>📅 {jugador.fechaNacimiento.toLocaleDateString('es-ES')}</p>
            {children}
        </div>
    )
}

export default Jugador;

// esto es lo que quiero que se vea cuando se cargan todos los jugadores