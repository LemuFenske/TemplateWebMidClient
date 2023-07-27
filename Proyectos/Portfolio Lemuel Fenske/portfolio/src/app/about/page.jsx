import Image from "next/image"
import imageUrl from './WhatsApp Image 2023-07-10 at 19.57.10.jpeg';
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center pt-28 justify-between min-h-screen bg-zinc-900">
      <div className="flex flex-col items-center w-4/5 sm:w-2/3 bg-zinc-900">
        <h1 className="mx-auto text-4xl font-bold mb-4">Sobre Mí</h1>
        <div className="flex flex-col md:flex-row items-center justify-around">
          
            <Image
              src={imageUrl}
              className="rounded-xl"
              alt="asd"
              width={350}
              height={350}
            />
        
          <p className="mx-4 md:mx-6 text-xl text-center md:text-left">
            Soy un desarrollador Full Stack. Estudié en la academia Henry en la que tuve experiencias en el desarrollo de aplicaciones web utilizando tecnologías como React, NodeJS, Express y Sequelize. También he trabajado en proyectos de equipo y he aprendido a colaborar en un entorno de desarrollo ágil. Estoy ansioso de aplicar mis habilidades y conocimientos en un entorno profesional y seguir creciendo como desarrollador.
          </p>
        </div>
      </div>
    </div>
  );
  }