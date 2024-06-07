import Form from "@/components/entrenador/FormEntrenador"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteEntrenador } from "@/lib/actions"
import Atras from '@/components/entrenador/buttonBackEntrenadores'

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const entrenador = await prisma.entrenador.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div className="container mx-auto p-4">
      <h3 className="inline-block bg-red-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Eliminar entrenador</h3>
      <Form action={deleteEntrenador} entrenador={entrenador} disabled={true} >
        <Button title='Eliminar entrenador' />
      </Form>
      <Atras />
    </div>
  )
}

export default page