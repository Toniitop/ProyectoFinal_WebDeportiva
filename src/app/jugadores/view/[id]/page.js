import FormularioJugador from "@/components/jugador/FormJugador"
import { prisma } from '@/lib/prisma'
import { getJugador } from "@/lib/actions"
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
        <h3 className="inline-block bg-green-500 text-white text-2xl font-bold mb-4 p-2 rounded-md">Ver Jugador</h3>
        <FormularioJugador action={getJugador} jugador={jugador} disabled={true} />
        <AtrasJugadores />
      </div>
    </>
  )
}

export default page