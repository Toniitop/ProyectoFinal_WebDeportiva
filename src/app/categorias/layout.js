function layoutCategorias({ children }) {
    return (
        <section className="container mx-auto p-4">
            <br />
            <h1 className="text-3xl font-bold mb-4 text-white bg-gradient-to-r from-yellow-400 to-teal-400 py-2 px-4 rounded-lg shadow-md inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mr-2">
                    <path fill="#ffffff" d="M14 25h14v2H14zm-6.83 1l-2.58 2.58L6 30l4-4l-4-4l-1.42 1.41zM14 15h14v2H14zm-6.83 1l-2.58 2.58L6 20l4-4l-4-4l-1.42 1.41zM14 5h14v2H14zM7.17 6L4.59 8.58L6 10l4-4l-4-4l-1.42 1.41z" />
                </svg>
                Categorias
            </h1>
            <hr className="mb-4 border-t-2 border-cyan-600" />
            {children}
        </section>
    )
}

export default layoutCategorias