import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import ImgFondo from "@/components/ImgFondo";
import Image from "next/image"; // Importación de Image de Next.js

async function Dashboard() {
    const session = await auth();

    if (session?.user.role === 'ADMIN')
        redirect('/admin')

    const menuItems = [
        {
            href: "/jugadores",
            label: "Jugadores",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 11 11">
                    <path d="M9 1.25a1.25 1.25 0 1 1-2.5-.001A1.25 1.25 0 0 1 9 1.25zm0 7.23a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm1.81-3.39L8.94 3.18A.48.48 0 0 0 8.56 3H1.51a.5.5 0 0 0 0 1H5L2.07 8.3a.488.488 0 0 0 0 .2a.511.511 0 0 0 1 .21H3L4.16 7H6l-1.93 3.24a.49.49 0 0 0-.07.26a.51.51 0 0 0 1 .2l3.67-6.38l1.48 1.48a.5.5 0 1 0 .7-.71h-.04z" fill="#000000" />
                </svg>
            ),
            bgColor: "bg-sky-950",
        },
        {
            href: "/entrenamientos",
            label: "Entrenamientos",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="#000000" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                </svg>
            ),
            bgColor: "bg-amber-600",
        }
    ];

    return (
        <>
            <ImgFondo />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="inline-block p-4 md:p-8 bg-teal-600 rounded-lg shadow-lg mt-8 mb-8 flex flex-col items-center border-2 border-yellow-500">
                    <div className="flex flex-col items-center pb-10">
                        {session?.user.image ? (
                            <Image
                                src={session?.user.image}
                                alt={session?.user.name}
                                width={128}
                                height={128}
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full mr-4 object-cover"
                            />
                        ) : (
                            <Image
                                src="/user.svg"
                                alt="Default User"
                                width={128}
                                height={128}
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full mr-4 mb-8 object-cover"
                            />
                        )}
                        <div>
                            <h1 className="mb-4 text-lg md:text-xl font-medium text-center text-lime-200 uppercase relative inline-block border-b-2 border-lime-200 px-4 py-2 shadow-lg bg-teal-400 bg-opacity-80 rounded-lg">{session?.user.name}</h1>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-1">
                                    <path fill="#ffffff" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" />
                                </svg>
                                <p className="text-xs md:text-sm text-lime-200">{session?.user.email}</p>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#ffffff" stroke="#538392" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                                </svg>
                                <p className="text-xs md:text-sm text-lime-200 ml-1">{session?.user.role}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-3/4 border-white mb-4 mx-auto" />
                    <div className="flex justify-center flex-wrap gap-4">
                        {menuItems.map((item, index) => (
                            <Link href={item.href} key={index} passHref>
                                <div className={`flex flex-col items-center p-4 rounded-lg shadow ${item.bgColor} hover:bg-lime-200 transition duration-500 cursor-pointer min-w-[200px] min-h-[150px]`}>
                                    <div className="p-2 rounded-full bg-white shadow-md">
                                        {item.icon}
                                    </div>
                                    <h2 className="mt-2 text-lg font-bold text-center">{item.label}</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="mt-2 transition-transform duration-300 ease-in-out hover:translate-y-[-0.25rem]">
                                        <path fill="#000000" d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208m-212.65 91.36a16 16 0 0 1-.09-22.63L303.58 272H170a16 16 0 0 1 0-32h133.58l-52.32-52.73A16 16 0 1 1 274 164.73l79.39 80a16 16 0 0 1 0 22.54l-79.39 80a16 16 0 0 1-22.65.09" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
