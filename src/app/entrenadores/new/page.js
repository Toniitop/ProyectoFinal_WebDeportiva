import Form from "@/components/entrenador/FormEntrenador"
import Button from "@/components/Button"
import { newEntrenador } from "@/lib/actions"
import Atras from '@/components/entrenador/buttonBackEntrenadores'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-4">
        <h3 className="inline-block bg-cyan-700 text-white text-2xl font-bold mb-4 p-2 rounded-md">Nuevo entrenador</h3>
        <Form action={newEntrenador} entrenador={null}>
          <Button title='Añadir entrenador' />
        </Form>
      </div>
      <Atras />
    </>
  )
}

export default page
