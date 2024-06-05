import FormularioJugador from "@/components/jugador/FormJugador"
import Button from "@/components/Button"
import { newJugador } from "@/lib/actions"
import AtrasJugadores from '@/components/jugador/buttonBackJugadores'

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div className="container mx-auto p-4">
    <h3 className="inline-block bg-cyan-700 text-white text-2xl font-bold mb-4 p-2 rounded-md">Nuevo Jugador:</h3>
        <FormularioJugador action={newJugador} jugador={null}>
          <br />
          <Button title='Crear jugador' />
        </FormularioJugador>
        <AtrasJugadores />
    </div>
  )
}

export default page