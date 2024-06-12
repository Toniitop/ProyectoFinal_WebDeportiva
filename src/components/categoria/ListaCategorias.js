import { getJugador, getCategorias } from "@/lib/actions";

async function ListaCategorias({ jugadorId, disabled }) {
    const categorias = await getCategorias();

    let jugador = null;
    let categoriaId = null;
    if (jugadorId) {
        jugador = await getJugador(jugadorId)
        categoriaId = jugador.categoriaId;
    }

    console.log(`CATEGORÍA del JUGADOR ${jugadorId}: `, categoriaId);

    return (
        <div className="border rounded bg-cyan-300 p-4 mt-4">
            <fieldset disabled={disabled} className="p-4 mt-2 relative">
                <legend className="text-xl font-bold mb-2">
                    Categorías
                </legend>
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        {categorias?.map((categoria) => (
                            <div key={categoria.id} className="flex items-center mb-2">
                                <input
                                    type='radio'
                                    name="categoria"
                                    value={categoria.id}
                                    defaultChecked={categoria.id === categoriaId}
                                    className="mr-2"
                                />
                                <span className="flex-grow">{categoria.nombre}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default ListaCategorias;


//esto es para que en los jugadores aparezca su entrenador asociado
//y con la categoría quizás tambien