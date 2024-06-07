import { getEntrenamiento, getJugadores } from "@/lib/actions";

async function ListaJugadores({ entrenamientoId, disabled }) {
    const jugadores = await getJugadores();

    let entrenamiento = null;
    let jugadorEntreno = null;
    if (entrenamientoId) {
        entrenamiento = await getEntrenamiento(entrenamientoId)
        jugadorEntreno = entrenamiento.jugadores.map(p => p.id);
    }

    return (
        <div className="border rounded bg-gray-300 p-4 mt-4">
            <fieldset disabled={disabled} className="p-4 mt-2 relative">
                <legend className="text-xl font-bold mb-2">
                    Jugadores
                </legend>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        {jugadores?.map((jugador) => (
                            <div key={jugador.id} className="flex items-center mb-2">
                                <input
                                    type='checkbox'
                                    name={jugador.id}
                                    value={jugador.id}
                                    defaultChecked={jugador.id === jugadorEntreno}
                                    className="mr-2"
                                />
                                <span className="flex-grow">{jugador.nombre} {jugador.apellido}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default ListaJugadores;


//esto es para que en los jugadores aparezca su entrenador asociado
//y con la categoría quizás tambien