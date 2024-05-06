import Link from 'next/link'
import Image from 'next/image'
import Profesor from '@/components/Profesor'
import { getProfesores } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const profesores = await getProfesores()
    // console.log(profesores);

    return (
        <>
            <div className="bg-gray-200 container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link legacyBehavior href="/profesores/new">
                    <a className="flex items-center bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        <Image src="/nuevo.svg" alt="Nuevo" width="20" height="20" />
                        <span className="ml-2 font-bold text-xl">Nuevo profesor</span>
                    </a>
                </Link>

                {profesores.map((profesor) => (
                    <div key={profesor.id} className="bg-white p-4 rounded-md shadow-lg">
                        <Profesor profesor={profesor} />
                        <div className="flex space-x-2 mt-2">
                            <Link legacyBehavior href={`/profesores/view/${profesor.id}`}>
                                <a className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-300">
                                    <Image src="/ver.svg" alt="Ver" width="24" height="20" />
                                    <span className="mr-5 ml-1">Ver</span>
                                </a>
                            </Link>

                            <Link legacyBehavior href={`/profesores/edit/${profesor.id}`}>
                                <a className="flex items-center bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-300">
                                    <Image src="/editar.svg" alt="Editar" width="20" height="20" />
                                    <span className="mr-4 ml-2">Editar</span>
                                </a>
                            </Link>

                            <Link legacyBehavior href={`/profesores/delete/${profesor.id}`}>
                                <a className="flex items-center bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-300">
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

