function layoutEntrenamientos({ children }) {
    return (
        <section className="container mx-auto p-4">
            <br />
            <h1 className="text-3xl font-bold mb-4 text-white bg-gradient-to-r from-yellow-500 to-amber-600 py-2 px-4 rounded-lg shadow-md inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="mr-2">
                    <path fill="#ffffff" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                </svg>
                Entrenamientos
            </h1>
            <hr className="mb-4 border-t-2 border-cyan-600" />
            {children}
        </section>
    )
}

export default layoutEntrenamientos