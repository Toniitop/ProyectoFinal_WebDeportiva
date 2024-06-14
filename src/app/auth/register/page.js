import RegisterForm from '@/components/register-form'
import Atras from '@/components/BtnBackRegistro'

function page() {
  return (
    <section className="container mx-auto p-4">
      <br />
      <h1 className="text-3xl font-bold mb-4 text-white bg-gradient-to-r from-blue-300 to-teal-400 py-2 px-4 rounded-lg shadow-md inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256" className='mr-2'><g fill="#ffffff">
          <path d="M168 100a60 60 0 1 1-60-60a60 60 0 0 1 60 60" opacity=".2" /><path d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-57.87 58.85a8 8 0 0 1-12.26 10.3C165.75 181.19 138.09 168 108 168s-57.75 13.19-77.87 37.15a8 8 0 0 1-12.25-10.3c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17M108 152a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52" /></g>
        </svg>
        Nuevo Registro
      </h1>
      <hr className="border-t-2 border-cyan-600" />
      <RegisterForm />
      <Atras />
    </section>
  )
}

export default page