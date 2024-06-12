'use client'
import Button from '@/components/button-form';
import ImgFondo from './ImgFondo';
import { useState } from 'react';
import { register } from '@/lib/actions'
import { signIn } from 'next-auth/react'; // signIn desde lado CLIENTE

function RegisterForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await register(data) // Server action
        if (message.success) {
            setTipo('success')
            setResultado(message.success);
            await signIn('credentials',
                {
                    email: data.get('email'),
                    password: data.get('password'),
                    callbackUrl: '/dashboard'
                })
        } else {
            setTipo('error')
            setResultado(message.error);
        }
    }
    return (
        <>
        <ImgFondo />
            <div className="flex items-center justify-center h-screen">
                <form
                    action={wrapper}
                    className="bg-green-100 p-8 shadow-md rounded-md max-w-md w-full"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-green-600 hover:text-teal-500 transition duration-300">REGISTRO</h2>
                    <br />
                    <div className="mb-4">
                        <label className="block text-gray-800 text-sm font-medium mb-2">
                            Nombre
                            <input
                                type="text"
                                name="name"
                                placeholder="Usuario"
                                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-green-600 transition duration-300"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-800 text-sm font-medium mb-2">
                            Email
                            <input
                                type="email"
                                name="email"
                                placeholder="usuario@mail.com"
                                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-green-600 transition duration-300"
                            />
                        </label>
                    </div>
                    <div className="mb-12">
                        <label className="block text-gray-800 text-sm font-medium mb-2">
                            Contraseña
                            <input
                                type="password"
                                name="password"
                                placeholder="******"
                                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-green-600 transition duration-300"
                            />
                        </label>
                    </div>
                    <p className={`text-center text-sm mb-4 ${tipo === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                        {resultado}
                    </p>
                    <Button title="Crear usuario" />
                </form>
            </div>
        </>
    );
};

export default RegisterForm;