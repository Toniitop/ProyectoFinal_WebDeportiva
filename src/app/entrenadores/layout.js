function layoutEntrenadores({ children }) {
    return (
        <section className="container mx-auto p-4">
            <br />
            <h1 className="text-3xl font-bold mb-4 text-white bg-gradient-to-r from-cyan-700 to-teal-400 py-2 px-4 rounded-lg shadow-md inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" className="mr-2"><g fill="#ffffff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><circle cx="8" cy="6" r="3.25" />
                    <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" /></g>
                </svg>
                Entrenadores
            </h1>
            <hr className="mb-4 border-t-2 border-cyan-600" />
            {children}
        </section>
    )
}

export default layoutEntrenadores