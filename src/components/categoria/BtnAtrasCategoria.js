import Link from "next/link";
//entrenadores

async function atras() {
    return (
        <>
            <Link legacyBehavior href="/categorias">
                <a>
                    <img src="/flecha.svg" alt="Flecha" className="mt-4 w-16 h-16" />
                </a>
            </Link>
        </>
    )
}

export default atras;