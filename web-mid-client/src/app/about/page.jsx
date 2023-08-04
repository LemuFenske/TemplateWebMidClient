import style from './about.module.css'
import Image from 'next/image'
import imageUrl from './fondo.jpg'
import arnoldUrl from './Arnold.png'

export default function About() {
  return (
    <div className="relative h-screen w-full bg-gray-600 flex justify-center items-center">
  <Image
    src={imageUrl}
    className="object-cover h-full w-full fixed z-0"
    alt="asd"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
  <div className='z-20 w-[100%] mb-0 mt-44 py-auto rounded flex flex-col items-center justify-around'>
    <div className='flex flex-wrap'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-green-500 ml-3 mt-20 sm:mt-auto'>Arnold Schwarzenegger</h1>
        <h2 className='text-2xl my-4'>Entrenador de Alto Rendimiento</h2>
      </div>
      <Image
        src={arnoldUrl}
        className=""
        alt="asd"
        width={0}
        height={300}
      />
    </div>
    <div className='z-20 w-full text-black bg-white mt-0 mx-auto flex items-center justify-center px-4'>
      <p className="py-4 mx-auto px-auto">
        Inspiro, educo y guío a otros para que se conviertan en lo mejor de sí mismos recuperando su vitalidad, <br/>
        resiliencia emocional y mental y sentido de propósito. Cuando entramos en nuestro poder auténtico,  <br/>
        encendemos una luz para que otros hagan lo mismo y elevamos colectivamente la conciencia humana.  <br/>
        Esa es mi agenda secreta.
      </p>
    </div>
  </div>
</div>
  )
}