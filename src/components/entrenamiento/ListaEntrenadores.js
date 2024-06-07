import { getEntrenamiento, getEntrenadores } from "@/lib/actions";

async function ListaEntrenadores({ entrenamientoId, disabled }) {
    const entrenadores = await getEntrenadores();

    let entrenamiento = null;
    let entrenadorEntrenamiento = null;
    if (entrenamientoId) {
        entrenamiento = await getEntrenamiento(entrenamientoId)
        entrenadorEntrenamiento = entrenamiento.entrenadorId;
    }

    return (
        <div className="border rounded bg-gray-300 p-4 mt-4">
            <fieldset disabled={disabled} className="p-4 mt-2 relative">
            <legend className="text-xl font-bold mb-2">
                    Entrenadores
                </legend>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        {entrenadores?.map((entrenador) => (
                            <div key={entrenador.id} className="flex items-center mb-2">
                                <input
                                    type='radio'
                                    name="entrenador"
                                    value={entrenador.id}
                                    defaultChecked={entrenador.id === entrenadorEntrenamiento}
                                    className="mr-2"
                                />
                                <span className="flex-grow">{entrenador.nombre} {entrenador.apellido}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default ListaEntrenadores;