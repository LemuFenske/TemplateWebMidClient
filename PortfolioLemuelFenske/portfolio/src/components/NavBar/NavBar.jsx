'use client'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-zinc-900 py-5 px-3 sm:w-2/3 fixed w-full">
        <div className="flex">
          <Link href="/" className="mx-3">
            <FontAwesomeIcon className="h-6 w-6 transform hover:scale-110" icon={faHome} />
          </Link>
          <div className="hidden sm:flex justify-end mr-1 ml-auto">
            <Link href="/about" className="mx-3 transform transition hover:text-gray-500">Sobre Mí</Link>
            <Link href="/projects" className="mx-3 transform transition hover:text-gray-500">Proyectos</Link>
            <Link href="/exp" className="mx-3 transform transition hover:text-gray-500">Experiencia</Link>
            <Link href="/contact" className="mx-3 transform transition hover:text-gray-500">Contáctame</Link>
          </div>
          <div className="sm:hidden ml-auto">
            <button className="mx-3 transform transition hover:text-gray-500" onClick={toggleMenu}>
            <FontAwesomeIcon className="h-6 w-6 transform hover:scale-110" icon={faBars} />
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="flex flex-col">
            <Link href="/about" className="mr-3 ml-auto my-2 transform transition hover:text-gray-500" onClick={toggleMenu}>
              Sobre Mí
            </Link>
            <Link href="/projects" className="mr-3 ml-auto my-2 transform transition hover:text-gray-500" onClick={toggleMenu}>
              Proyectos
            </Link>
            <Link href="/exp" className="mr-3 ml-auto my-2 transform transition hover:text-gray-500" onClick={toggleMenu}>
              Experiencia
            </Link>
            <Link href="/contact" className="mr-3 ml-auto my-2 transform transition hover:text-gray-500" onClick={toggleMenu}>
              Contáctame
            </Link>
          </div>
        )}
        <hr className="border-t border-white mt-3" />
      </div>
    </div>
  );
}