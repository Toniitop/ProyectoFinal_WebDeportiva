function layoutJugadores({ children }) {
    return (
        <section className="container mx-auto p-4">
            <br />
            <h1 className="text-3xl font-bold mb-4 text-white bg-gradient-to-r from-sky-800 to-teal-400 py-2 px-4 rounded-lg shadow-md inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 11 11" className="mr-2">
                    <path d="M9 1.25a1.25 1.25 0 1 1-2.5-.001A1.25 1.25 0 0 1 9 1.25zm0 7.23a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm1.81-3.39L8.94 3.18A.48.48 0 0 0 8.56 3H1.51a.5.5 0 0 0 0 1H5L2.07 8.3a.488.488 0 0 0 0 .2a.511.511 0 0 0 1 .21H3L4.16 7H6l-1.93 3.24a.49.49 0 0 0-.07.26a.51.51 0 0 0 1 .2l3.67-6.38l1.48 1.48a.5.5 0 1 0 .7-.71h-.04z" fill="currentColor" />
                </svg>
                Jugadores
            </h1>
            <hr className="mb-4 border-t-2 border-cyan-600" />
            {children}
        </section>
    )
}

export default layoutJugadores