import FormCategoria from "@/components/categoria/FormCategoria"
import { prisma } from '@/lib/prisma'
import { getCategoria } from "@/lib/actions"
import Atras from '@/components/categoria/BtnAtrasCategoria'

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const categoria = await prisma.categoria.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div className="container mx-auto p-4">
      <h3 className="inline-block bg-green-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Ver Categoría</h3>
      <FormCategoria action={getCategoria} categoria={categoria} disabled={true} />
      <Atras />
    </div>
  )
}

export default page