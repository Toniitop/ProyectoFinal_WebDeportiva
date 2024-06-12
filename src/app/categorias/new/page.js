import FormCategoria from "@/components/categoria/FormCategoria"
import Button from "@/components/Button"
import { newCategoria } from "@/lib/actions"
import Atras from '@/components/categoria/BtnAtrasCategoria'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-4">
        <h3 className="inline-block bg-cyan-700 text-white text-2xl font-bold mb-4 p-2 rounded-md">Nueva Categoría:</h3>
        <FormCategoria action={newCategoria} categoria={null}>
          <br />
          <Button title='Crear categoria' />
        </FormCategoria>
        <Atras />
      </div>
    </>
  )
}

export default page