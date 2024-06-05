function Categoria ({ children, categoria }) {
    return (
        <div className='card'>
            <p><strong>{categoria.nombre}</strong></p>
            {children}
        </div>
    )
}

export default Categoria 