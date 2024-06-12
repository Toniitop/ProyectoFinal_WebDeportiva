import Link from 'next/link';
import { auth } from "@/auth";
import { logout } from '@/lib/actions';

async function Header() {
    const session = await auth();

    return (
        <nav className="bg-teal-600 border-b border-yellow-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link legacyBehavior href="/">
                            <img className="rounded w-10 h-10 lg:h-10 cursor-pointer" src="/logoPeque.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        
                        {session && session.user.role === 'ADMIN' ? (
                            <Link legacyBehavior href="/admin">
                                <a className="font-bold text-white hover:text-yellow-400">Panel Administrador</a>
                            </Link>
                        ) : session && session.user.role === 'USER' ? (
                            <Link legacyBehavior href="/dashboard">
                                <a className="font-bold text-white hover:text-gray-300 hover:text-yellow-400">Panel de Entrenador</a>
                            </Link>
                        ) : null}

                    </div>
                    <div className="flex items-center space-x-4">
                        {session ? (
                            <form>
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-lime-200 hover:text-black transition duration-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    formAction={logout}>
                                    Logout
                                </button>
                            </form>
                        ) : (
                            <div className="flex">
                                <Link legacyBehavior href="/auth/login">
                                    <a className="ml-4 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-lime-200 hover:text-black transition duration-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        Login
                                    </a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
