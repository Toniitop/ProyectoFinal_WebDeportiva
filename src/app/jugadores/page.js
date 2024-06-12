import Link from 'next/link';
import Image from 'next/image';
import ImgFondo from '@/components/ImgFondo';
import Jugador from '@/components/jugador/Jugador';
import { getJugadores } from '@/lib/actions';

export const dynamic = 'force-dynamic';

export default async function Home() {
    const jugadores = await getJugadores();

    return (
        <>
            <ImgFondo />
            <div className="container mx-auto p-4 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link legacyBehavior href="/jugadores/new">
                    <a className="flex items-center justify-center bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white transition duration-400">
                        <Image src='/nuevo.svg' alt='Nuevo' width="24" height="24" />
                        <span className="ml-2 font-bold text-lg">Nuevo Jugador</span>
                    </a>
                </Link>

                {jugadores.map((jugador) => (
                    <div key={jugador.id} className="bg-white p-4 rounded-md shadow-lg">
                        <Jugador jugador={jugador} />
                        <div className="flex space-x-2 mt-2">
                            <Link legacyBehavior href={`/jugadores/view/${jugador.id}`}>
                                <a className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-400 transform hover:-translate-y-1 transition duration-300 shadow hover:shadow-lg">
                                    <Image src="/ver.svg" alt="Ver" width="24" height="20" />
                                    <span className="mr-5 ml-1">Ver</span>
                                </a>
                            </Link>
                            <Link legacyBehavior href={`/jugadores/edit/${jugador.id}`}>
                                <a className="flex items-center bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-400 transform hover:-translate-y-1 transition duration-300 shadow hover:shadow-lg">
                                    <Image src="/editar.svg" alt="Editar" width="20" height="20" />
                                    <span className="mr-4 ml-2">Editar</span>
                                </a>
                            </Link>
                            <Link legacyBehavior href={`/jugadores/delete/${jugador.id}`}>
                                <a className="flex items-center bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transform hover:-translate-y-1 transition duration-300 shadow hover:shadow-lg">
                                    <Image src="/eliminar.svg" alt="Eliminar" width="20" height="20" />
                                    <span className="mr-4 ml-2">Eliminar</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
