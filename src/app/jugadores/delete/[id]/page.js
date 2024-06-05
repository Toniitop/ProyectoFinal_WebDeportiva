import FormularioJugadores from "@/components/jugador/FormJugador"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteJugador } from "@/lib/actions"
import AtrasJugadores from '@/components/jugador/buttonBackJugadores'

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const jugador = await prisma.jugador.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div className="container mx-auto p-4">
      <h3 className="inline-block bg-red-600 text-white text-2xl font-bold mb-4 p-2 rounded-md">Eliminar jugador</h3>
      <FormularioJugadores action={deleteJugador} jugador={jugador} disabled={true} >
        <br />
        <Button title='Eliminar jugador' />
      </FormularioJugadores>
      <AtrasJugadores />
    </div>
  )
}

export default page