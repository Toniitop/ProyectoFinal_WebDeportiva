import { loginGoogle } from "@/lib/actions"

function OAuthForm() {
  return (
    <>
      <form className='oauth'>
        {/*He eliminado el poder logearte con google, pues sólo puede entrar el ADMIN y los usuarios creados por el */}
        <button
          type="button"
          disabled
          role="button"
          className="social-button focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10 transition-all ease-in-out duration-300 transform hover:scale-105 hover:bg-gray-300 hover:border-gray-300 cursor-not-allowed"
        >
          <img src="/google.svg" alt="Google" className="w-8 h-8 mr-2" />
          <p className="text-base font-medium ml-4 text-gray-500 transition-all">Iniciar sesión con Google</p>
        </button>
        <div className="w-full flex items-center justify-between py-5 mt-4">
          <hr className="w-full bg-gray-400" />
          <p className="text-base font-medium leading-4 px-2.5 text-gray-400">O</p>
          <hr className="w-full bg-gray-400" />
        </div>
      </form>
    </>
  )
}

export default OAuthForm;
