import Link from "next/link"

function Footer() {
    return (
        <section className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link legacyBehavior href="/" className="flex items-center">
                            <div>
                                <img src="/logo.png" className="rounded h-20 w-36 mt-5" alt="SC360 Logo" />
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="text-white mb-6 text-sm font-semibold text-gray-900 uppercase">Información</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4 hover:text-gray-200">
                                    <Link legacyBehavior href="/about" className="">Acerca de</Link>
                                </li>
                                <li className="hover:text-gray-200">
                                    <Link legacyBehavior href="#" className="hover:underline">Cookies</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-white mb-6 text-sm font-semibold text-gray-900 uppercase">Síguenos</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="ml-5 mb-3 hover:filter hover:brightness-150">
                                    <a href="https://github.com/Toniitop" className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                            <path fill="#999999" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="ml-4 hover:filter hover:brightness-150">
                                    <a href="https://www.instagram.com/82consejos/?hl=es" className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="ml-1">
                                            <path fill="#c026d3" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-white mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4 hover:text-gray-200">
                                    <Link legacyBehavior href="#">Política de Privacidad</Link>
                                </li>
                                <li className="hover:text-gray-200">
                                    <Link legacyBehavior href="#">Terminos y Condiciones</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="mx-auto text-center">
                    <span className="text-sm text-gray-400">© 2024 - SC360™ - All Rights Reserved.</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;