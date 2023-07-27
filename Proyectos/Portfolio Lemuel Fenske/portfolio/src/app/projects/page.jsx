import Image from "next/image"
import electroshopImage from './ElectroShop.png'
import pokemonImage from './Pokemon.png'
import Link from 'next/link'


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="flex min-h-screen flex-col items-center justify-between w-full">
        <div className='my-auto flex flex-col mt-28 w-full sm:w-2/3'>
          <div>
            <h1 className='mb-4 ml-3 text-xl font-bold'>ElectroShop</h1>
            <Link href='https://electro-shop-client-asekdr112-daniellatta.vercel.app/' target='_blank'>
            <Image
              src={electroshopImage}
              className="rounded-xl w-4/5 mx-auto transition hover:scale-105 cursor-pointer"
              alt="asd"
              width={'80%'}
              height={0}
            /></Link>
            <p className='mt-4 w-4/5 mx-auto mb-10'>Junto con mi equipo, desarrollamos una tienda online llamada ElectroShop utilizando metodologías ágiles. La plataforma permite a los usuarios comprar productos, agregarlos y sacarlos del carrito, dar reseñas de cada uno y más. A los administradores les permite publicar productos, borrarlos, activar cuentas y desactivarlas. Mi papel principal en el proyecto fue en el front-end, donde creé rutas, la barra de navegación, el detalle de los productos, la pasarela de pagos, entre otros. También colaboré en el back-end con la implementación de Mercado Pago para cobrar las ventas y la inclusión de Nodemailer para el envío de correos al confirmar la compra.</p>
          </div>
          <div>
            <h1 className='mb-4 ml-3 text-xl font-bold'>Pokemon</h1>
            <Image
              src={pokemonImage}
              className="rounded-xl w-4/5 mx-auto transition hover:scale-105 cursor-pointer"
              alt="asd"
              width={'80%'}
              height={0}
            />
            <p className='mt-4 w-4/5 mx-auto mb-10'>Durante el bootcamp de Henry, desarrollé un proyecto individual en el que aprendí a crear una aplicación utilizando el stack PERN. La app permitía a los usuarios interactuar con Pokemones, creando, eliminando, filtrando, ordenando y buscando por nombre. Fue una experiencia enriquecedora que amplió mis habilidades como desarrollador web.</p>
          </div>
        </div>
      </div>
    </div>
  );
}