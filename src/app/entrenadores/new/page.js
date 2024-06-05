import Form from "@/components/FormEntrenador"
import Button from "@/components/Button"
import { newEntrenador } from "@/lib/actions"
import Atras from '@/components/buttonBackEntrenadores'

export const dynamic = 'force-dynamic'

function page() {
  return (
    <>
      <div className="container mx-auto p-4">
      <h3 className="inline-block bg-cyan-700 text-white text-2xl font-bold mb-4 p-2 rounded-md">Nuevo entrenador</h3>
        <Form action={newEntrenador} entrenador={null}>
          <Button title='Crear entrenador' />
        </Form>
      </div>
      <Atras />
    </>
  )
}

export default page