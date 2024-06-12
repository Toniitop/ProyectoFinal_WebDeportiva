import React from 'react';
import Link from 'next/link';
import ImgFondo from '@/components/ImgFondo';

function About() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
            <ImgFondo />
            <div className="max-w-4xl mx-auto p-12 bg-gray-200 rounded-lg shadow-lg my-8">
                <h1 className="text-4xl font-bold mb-12 italic text-teal-600 text-center">Sobre la Gestión Deportiva de Nuestro Club</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold mb-4 text-teal-600 text-center">Bienvenido a Nuestro Club Deportivo</h2>
                        <p className="text-lg mb-4 text-center">
                            Nuestro club deportivo es un espacio dedicado al desarrollo y la práctica de diversas disciplinas deportivas. Nos enorgullece ofrecer una plataforma integral de gestión deportiva para nuestros entrenadores, jugadores y personal administrativo.
                        </p>
                    </div>
                    <div className="md:col-span-1 mt-8">
                        <img className="mx-auto h-48 md:h-auto rounded" src="/logo.png" alt="Gestión Deportiva" />
                    </div>
                </div>

                <div className="my-8">
                    <h3 className="text-xl text-teal-600 font-bold mb-2">Nuestra Misión:</h3>
                    <p className="text-lg mb-4">
                        En nuestro club, nos dedicamos a fomentar el amor por el deporte y promover un estilo de vida activo y saludable. Nuestro objetivo es proporcionar un entorno inclusivo y seguro donde nuestros miembros puedan crecer como atletas y como personas.
                    </p>
                </div>

                <div className="my-8">
                    <h3 className="text-xl text-teal-600 font-bold mb-2">Nuestros Servicios:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Gestión de Usuarios: Facilitamos el registro y la gestión de entrenadores y jugadores, garantizando un acceso seguro y personalizado a nuestra plataforma.</li>
                        <li>Administración de Equipos: Ofrecemos herramientas intuitivas para la creación, edición y eliminación de equipos deportivos, así como la gestión de sus miembros.</li>
                        <li>Planificación de Eventos: Simplificamos la organización de eventos deportivos, desde entrenamientos hasta competiciones, permitiendo una gestión eficiente de horarios y recursos.</li>
                        <li>Seguimiento del Rendimiento: Proporcionamos herramientas para el seguimiento del progreso y el rendimiento de nuestros jugadores, facilitando una evaluación detallada y objetiva.</li>
                    </ul>
                </div>

                <div className="">
                    <img className="mx-auto h-30 md:h-auto rounded mb-8" src="/aboutUs.png" alt="Sobre Nosotros" />
                </div>

                <p className="text-lg mb-8">
                    Únete a nuestro club deportivo y descubre el poder de una gestión deportiva eficiente. ¡Simplifica, organiza y mejora tu experiencia deportiva con nosotros!
                </p>

                <div className="text-center">
                    <Link href="/" className="text-white bg-teal-600 hover:bg-lime-200 hover:text-black transition duration-400 py-2 px-4 rounded" >
                        Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;
