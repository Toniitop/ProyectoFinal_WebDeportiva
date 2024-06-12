import FormEntrenamiento from "@/components/entrenamiento/FormEntrenamiento"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteEntrenamiento } from "@/lib/actions"
import Atras from '@/components/entrenamiento/btnBackEntrenos'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const entrenamiento = await prisma.entrenamiento.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-4">
        <h3 className="inline-block bg-red-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Eliminar Entrenamiento</h3>
        <FormEntrenamiento action={deleteEntrenamiento} entrenamiento={entrenamiento} disabled={true} >
          <br />
          <Button title='Eliminar entrenamiento' />
        </FormEntrenamiento>
        <Atras />
      </div>
    </>
  )
}

export default page