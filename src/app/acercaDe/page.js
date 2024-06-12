import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ImgFondo from '@/components/ImgFondo';

function About() {
    return (
        <>
            <Head>
                <title>About - Antonio Ortiz Rodríguez</title>
                <meta name="description" content="Conoce más sobre Antonio Ortiz Rodríguez, desarrollador web especializado en Next.js, Tailwind y PostgreSQL." />
            </Head>
            <ImgFondo alt="Fondo decorativo" />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="max-w-4xl mx-auto p-6 md:p-12 bg-gray-200 rounded-lg shadow-lg my-8">
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/yo.png"
                            alt="Foto de Antonio Ortiz Rodríguez"
                            width={150}
                            height={150}
                            className="rounded-full object-cover"
                        />
                    </div>
                    <p className="text-gray-800 text-justify leading-relaxed">
                        ¡Hola!, me llamo <strong>Antonio J. Ortiz Rodríguez</strong>, soy un proyecto de desarrollador web y he creado una aplicación web SPA utilizando Next.js, Tailwind y PostgreSQL como base de datos.
                        Esta aplicación se ejecuta mediante el framework de Next.js, permitiendo un desarrollo eficiente y dinámico.
                        También he implementado Tailwind para el diseño responsivo y estilizado de la interfaz, aprovechando su flexibilidad y eficiencia.
                        La base de datos PostgreSQL maneja y organiza toda la información de la aplicación, garantizando un rendimiento robusto y confiable.
                    </p>
                    <br />
                    <span class="inline-block h-1 w-10 rounded bg-teal-600 mt-8 mb-6"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Antonio J. Ortiz Rodriguez</h2>
                    <p class="text-gray-500 mb-6">Graduado DAW</p>
                    <div className="text-center">
                        <Link href="/" className="text-white bg-teal-600 hover:bg-lime-200 hover:text-black transition duration-400 py-2 px-4 rounded" >
                            Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;