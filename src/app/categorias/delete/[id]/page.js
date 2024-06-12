import FormCategoria from "@/components/categoria/FormCategoria"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteCategoria } from "@/lib/actions"
import Atras from '@/components/categoria/BtnAtrasCategoria'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const categoria = await prisma.categoria.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-4">
        <h3 className="inline-block bg-red-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Eliminar Categoria</h3>
        <FormCategoria action={deleteCategoria} categoria={categoria} disabled={true} >
          <br />
          <Button title='Eliminar categoria' />
        </FormCategoria>
        <Atras />
      </div>
    </>
  )
}

export default page