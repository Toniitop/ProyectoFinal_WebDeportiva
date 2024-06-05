import Link from "next/link";
//entrenadores

async function atras() {
    return (
        <>
            <Link legacyBehavior href="/entrenadores">
                <a>
                    <img src="/flecha.svg" alt="Flecha" className="w-16 h-16" />
                </a>
            </Link>
        </>
    )
}

export default atras;