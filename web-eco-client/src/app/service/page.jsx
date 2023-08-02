import Image from "next/image"
import imageUrl from './image.jpg'


export default function Service() {
  return (
    <div className="relative h-screen w-full bg-gray-600 flex justify-center items-center">
      <Image
        src={imageUrl}
        className="object-cover h-full w-full fixed z-0"
        alt="asd"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>
      <div className="z-20 absolute w-[90%] md:w-[60%] px-4 md:px-0 flex flex-col justify-center items-start">
        <h1 className="text-5xl text-green-500 font-black italic my-3">MIS SERVICIOS</h1>
        <h2 className="text-xl font-bold my-3">Me especializo en crear planes de entrenamiento 100% personalizados según tus objetivos, necesidades y nivel de entrenamiento. No dejes tu preparación física al azar y asesórate con un profesional.</h2>
        <h3 className="text-2xl font-bold my-3">¡Suscríbete y comenzá a entrenar!</h3>
      </div>
    </div>
  );
}