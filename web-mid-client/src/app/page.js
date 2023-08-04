import Image from 'next/image'
import imageUrl from './home.png'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="relative h-screen w-full bg-gray-600 flex justify-center items-center">
      <link rel="icon" href="/favicon.ico" sizes="any" />
    <Image
      src={imageUrl}
      className="object-cover h-full w-full fixed z-0"
      alt="asd"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
    <div className=" z-20 absolute text-white text-3xl font-bold flex flex-col justify-center items-center">
      <h1 className='text-6xl italic font-black ml-3 '>SE TU MEJOR VERSIÓN</h1>
      <h2 className='mb-4 mx-3 my-4'>Comenzá a entrenar con expertos</h2>
      <button className="bg-green-500 hover:bg-green-800 text-black px-4 py-2 rounded-lg font-semibold mx-auto">
        <Link href='/plans'>Empezá hoy!</Link>
      </button>
    </div>
    
  </div>
  )
}
