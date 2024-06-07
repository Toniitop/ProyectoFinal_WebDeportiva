import FormEntrenamiento from "@/components/entrenamiento/FormEntrenamiento"
import Button from "@/components/Button"
import { prisma }  from '@/lib/prisma'
import { editEntrenamiento } from "@/lib/actions"
import Atras from '@/components/entrenamiento/btnBackEntrenos'

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const entrenamiento = await prisma.entrenamiento.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div className="container mx-auto p-4">
      <h3 className="inline-block bg-yellow-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Editar Entrenamiento</h3>
      <FormEntrenamiento action={editEntrenamiento} entrenamiento={entrenamiento} >
        <br />
        <Button title='Editar entrenamiento' />
      </FormEntrenamiento>
      <Atras />
    </div>
  )
}


export default page