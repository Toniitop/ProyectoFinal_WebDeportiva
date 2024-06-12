import Link from "next/link";
import ImgFondo from "@/components/ImgFondo";
import { auth } from '@/auth'

async function Home() {
  const session = await auth();

  return (
    <>
      <main className="min-h-screen relative flex flex-col items-center justify-center">
        <ImgFondo />
        <div className="flex flex-col items-center justify-center relative z-10 text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 italic hover:text-lime-200 transition duration-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Bienvenido a SportClub360
          </h1>
          <p className="bg-gray-300 rounded text-teal-600 font-bold text-xl mt-4 mb-8 p-4">
            Web para registrar jugadores y entrenadores de tu club.
          </p>
          {session && session.user.role === 'ADMIN' ? (
            <Link href="/admin">
              <svg className="h-20 w-20 text-white hover:text-lime-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          ) : session && session.user.role === 'USER' ? (
            <Link href="/dashboard">
              <svg className="h-20 w-20 text-teal-600 hover:text-lime-200 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          ) : null}
        </div>
      </main>
    </>
  );
}

export default Home;
