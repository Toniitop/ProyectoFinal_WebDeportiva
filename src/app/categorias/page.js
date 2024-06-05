import Link from 'next/link'
import Image from 'next/image'
import Categoria from '@/components/categoria/Categoria'
import { getCategorias } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const categorias = await getCategorias();
    // console.log(categorias);

    return (
        <>
            <div className="bg-gray-200 container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link legacyBehavior href="/categorias/new">
                    <a className="flex items-center bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        <Image src='/nuevo.svg' alt='nuevo' width="20" height="20" />
                        <span className="ml-2 font-bold text-xl">Nueva Categoria</span>
                    </a>
                </Link>

                {categorias.map((categoria) => (
                    <div key={categoria.id} className="bg-white p-4 rounded-md shadow-lg">
                        <Categoria categoria={categoria} />
                        <div className="flex space-x-2 mt-2">
                            <Link legacyBehavior href={`/categorias/view/${categoria.id}`} >
                                <a className="flex items-center bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-300">
                                    <Image src="/ver.svg" alt="Ver" width="24" height="20" />
                                    <span className="mr-5 ml-1">Ver</span>
                                </a>
                            </Link>
                            <Link legacyBehavior href={`/categorias/edit/${categoria.id}`} >
                                <a className="flex items-center bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition duration-300">
                                    <Image src="/editar.svg" alt="Editar" width="20" height="20" />
                                    <span className="mr-4 ml-2">Editar</span>
                                </a>
                            </Link>
                            <Link legacyBehavior href={`/categorias/delete/${categoria.id}`} >
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
    )
}

//esto es cuando se cargan todos los categorias y se ven los botoncitos de quitar y poner