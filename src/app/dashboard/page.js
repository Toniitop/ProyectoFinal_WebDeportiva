import { auth } from "@/auth";
import Link from "next/link";
import ImgFondo from "@/components/ImgFondo";
import { redirect } from "next/navigation"

async function Dashboard() {
    const session = await auth();

    if (session?.user.role === 'ADMIN')
        redirect('/admin')

    return (
        <>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <ImgFondo />
                <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg mt-8 flex flex-col items-center border-4 border-green-600">
                    <div className="flex flex-col items-center pb-10">
                        {session?.user.image ? (
                            <img
                                src={session?.user.image}
                                alt={session?.user.name}
                                className="w-32 h-32 rounded-full mr-4 text-white object-cover"
                            />
                        ) : (
                            <img
                                src="/default.png"
                                alt="Default User"
                                className="w-32 h-32 rounded-full mr-4 mb-8 object-cover "
                            />
                        )}
                        <div>
                            <h1 className="mb-2 text-xl font-medium text-center text-green-600 uppercase">{session?.user.name}</h1>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-1">
                                    <path fill="#999999" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
                                </svg>
                                <p className="text-sm text-gray-500">{session?.user.email}</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                                </svg>
                                <p className="text-sm text-gray-500 ml-1">{session?.user.role}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full border-gray-400 mt-4 mb-4" />
                    <ul className="flex flex-col items-center text-center w-full">
                        <li className="w-full py-2 px-4 text-xs md:text-sm font-medium text-white focus:outline-none bg-green-600 rounded-lg border border-transparent transition duration-400 hover:bg-teal-600 focus:z-10 focus:ring-4 focus:ring-gray-100 mt-2">
                            <Link href="/categorias">Categorias</Link>
                        </li>
                        <li className="w-full py-2 px-4 text-xs md:text-sm font-medium text-white focus:outline-none bg-green-600 rounded-lg border border-transparent transition duration-400 hover:bg-teal-600 focus:z-10 focus:ring-4 focus:ring-gray-100 mt-2">
                            <Link href="/jugadores">Jugadores</Link>
                        </li>
                        <li className="w-full py-2 px-4 text-xs md:text-sm font-medium text-white focus:outline-none bg-green-600 rounded-lg border border-transparent transition duration-400 hover:bg-teal-600 focus:z-10 focus:ring-4 focus:ring-gray-100 mt-2">
                            <Link href="/entrenamientos">Entrenamientos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Dashboard;