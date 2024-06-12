import Form from "@/components/entrenador/FormEntrenador"
import { prisma } from '@/lib/prisma'
import { getEntrenador } from "@/lib/actions"
import Atras from '@/components/entrenador/buttonBackEntrenadores'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

async function Page({ params }) {
  const entrenador = await prisma.entrenador.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-4">
        <h3 className="inline-block bg-green-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Ver entrenador</h3>
        <Form action={getEntrenador} entrenador={entrenador} disabled={true} />
        <Atras />
      </div>
    </>
  )
}

export default Page;