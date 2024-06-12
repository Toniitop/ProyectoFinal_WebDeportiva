import FormEntrenamiento from "@/components/entrenamiento/FormEntrenamiento"
import Button from "@/components/Button"
import { newEntrenamiento } from "@/lib/actions"
import Atras from '@/components/entrenamiento/btnBackEntrenos'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-4">
        <h3 className="inline-block bg-cyan-700 text-white text-2xl font-bold mb-4 p-2 rounded-md">Nuevo Entrenamiento:</h3>
        <FormEntrenamiento action={newEntrenamiento} entrenamiento={null}>
          <br />
          <Button title='Anotar Entreno' />
        </FormEntrenamiento>
        <Atras />
      </div>
    </>
  )
}

export default page