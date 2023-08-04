'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <div className="z-40 w-full flex items-center bg-gray-950 text-green-100 h-14 text-xl justify-end fixed font-sans shadow-md">
         <div className=" w-full">
         <div className="flex items-center justify-between">
           <h2 className="ml-3 sm:ml-10 font-bold text-emerald-500">Arnold Schwarzenegger</h2>
           <div className="hidden sm:flex justify-end">
            <Link href="/" className="mx-3 transform transition hover:text-emerald-500">
              Inicio
             </Link>
             <Link href="/about" className="mx-3 transform transition hover:text-emerald-500">
               Sobre Mi
             </Link>
             <Link href="/service" className="mx-3 transform transition hover:text-emerald-500">
               Servicios
             </Link>
             <Link href="/plans" className="mx-3 transform transition hover:text-emerald-500">
               Planes
             </Link>
           </div>
           <div className="sm:hidden">
             <button className="mx-3 transform transition hover:text-emerald-500" onClick={toggleMenu}>
               <FontAwesomeIcon className="h-6 w-6 transform hover:scale-110" icon={faBars} />
            </button>
           </div>
       </div>
        {showMenu && (
          <div className="flex flex-col bg-black mt-28">
            <Link
              href="/"
              className="mr-3 ml-auto my-2 transform transition hover:text-emerald-500"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="mr-3 ml-auto my-2 transform transition hover:text-emerald-500"
              onClick={toggleMenu}
            >
              Sobre Mi
            </Link>
            <Link
              href="/service"
              className="mr-3 ml-auto my-2 transform transition hover:text-emerald-500"
              onClick={toggleMenu}
            >
              Servicios
            </Link>
            <Link
              href="/plans"
              className="mr-3 ml-auto my-2 transform transition hover:text-emerald-500"
              onClick={toggleMenu}
            >
              Planes
            </Link>
          </div>
        )}
      </div>
        </div>
    )
  }


{/* <h2 className="ml-28 mr-auto font-bold text-emerald-500">Arnold Schwarzenegger</h2> */}
         {/* <Link href='/' className="mx-3 hover:text-emerald-500">Home</Link>
         <Link href='/about' className="mx-3 hover:text-emerald-500">About</Link>
         <Link href='/service' className="mx-3 hover:text-emerald-500">Services</Link>
         <Link href='/plans' className="mx-3 hover:text-emerald-500">Plans</Link> */}



//   return (
//     <div className="flex justify-center z-50">
//       <div className="flex flex-col bg-zinc-900 py-5 px-3 sm:w-2/3 fixed w-full z-50">
//         <div className="flex items-center justify-between">
//           <h2 className="ml-3 font-bold text-emerald-500">Arnold Schwarzenegger</h2>
//           <div className="hidden sm:flex justify-end">
//             <Link href="/about" className="mx-3 transform transition hover:text-gray-500">
//               Sobre Mí
//             </Link>
//             <Link href="/projects" className="mx-3 transform transition hover:text-gray-500">
//               Proyectos
//             </Link>
//             <Link href="/exp" className="mx-3 transform transition hover:text-gray-500">
//               Experiencia
//             </Link>
//             <Link href="/contact" className="mx-3 transform transition hover:text-gray-500">
//               Contáctame
//             </Link>
//           </div>
//           <div className="sm:hidden">
//             <button className="mx-3 transform transition hover:text-gray-500" onClick={toggleMenu}>
//               <FontAwesomeIcon className="h-6 w-6 transform hover:scale-110" icon={faBars} />
//             </button>
//           </div>
//         </div>
//         {showMenu && (
//           <div className="flex flex-col">
//             <Link
//               href="/about"
//               className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
//               onClick={toggleMenu}
//             >
//               Sobre Mí
//             </Link>
//             <Link
//               href="/projects"
//               className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
//               onClick={toggleMenu}
//             >
//               Proyectos
//             </Link>
//             <Link
//               href="/exp"
//               className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
//               onClick={toggleMenu}
//             >
//               Experiencia
//             </Link>
//             <Link
//               href="/contact"
//               className="mr-3 ml-auto my-2 transform transition hover:text-gray-500"
//               onClick={toggleMenu}
//             >
//               Contáctame
//             </Link>
//           </div>
//         )}
//         <hr className="border-t border-white mt-3" />
//       </div>
//     </div>
//   );
// }






  