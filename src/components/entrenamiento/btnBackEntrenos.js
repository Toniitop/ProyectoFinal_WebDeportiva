import Link from "next/link";
//entrenos

async function atras() {
    return (
        <>
            <Link legacyBehavior href="/entrenamientos">
                <a>
                    <img src="/flecha.svg" alt="Flecha" className="mt-4 w-16 h-16" />
                </a>
            </Link>
        </>
    )
}

export default atras;