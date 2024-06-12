import FormularioJugador from "@/components/jugador/FormJugador"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { editJugador } from "@/lib/actions"
import AtrasJugadores from '@/components/jugador/buttonBackJugadores'
import ImgFondo from "@/components/ImgFondo"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const jugador = await prisma.jugador.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <>
      <ImgFondo />
      <div className="container mx-auto p-4">
        <h3 className="inline-block bg-yellow-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Editar jugador</h3>
        <FormularioJugador action={editJugador} jugador={jugador} >
          <br />
          <Button title='Editar jugador' />
        </FormularioJugador>
        <AtrasJugadores />
      </div>
    </>
  )
}


export default page