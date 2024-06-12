import Form from "@/components/entrenador/FormEntrenador"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { editEntrenador } from "@/lib/actions"
import Atras from '@/components/entrenador/buttonBackEntrenadores'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const entrenador = await prisma.entrenador.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-4">
        <h3 className="inline-block bg-yellow-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Editar entrenador</h3>
        <Form action={editEntrenador} entrenador={entrenador} >
          <Button title='Editar entrenador' />
        </Form>
        <Atras />
      </div>
    </>
  )
}


export default page