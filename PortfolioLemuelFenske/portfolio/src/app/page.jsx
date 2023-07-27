
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';






export default function Home() {


  return (
    <div className="flex h-screen flex-col items-center justify-between bg-zinc-900 ">
      <div className='my-auto flex flex-col w-full sm:w-2/3 ml-5'>
        <h1 className='font-bold text-6xl'>Lemuel Fenske</h1>
        <h2 className='text-2xl'>Full Stack Web Developer</h2>
        <h3 className='text-slate-500'>
          Soy un desarrollador Full Stack. Estudié en la academia Henry.</h3>
          <div className="flex">
          <Link href='https://github.com/LemuFenske' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="h-6 w-6 m-4 transform hover:scale-110" icon={faGithub} />
          </Link>
          <Link href='https://www.linkedin.com/in/lemuel-fenske/' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="h-6 w-6 m-4 transform hover:scale-110" icon={faLinkedin} />
          </Link>
          <Link href='https://drive.google.com/file/d/1SRmFSBhE_5B2zJWsA6sAq4ThaNSlcgIs/view?usp=sharing' target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="h-6 w-6 m-4 transform hover:scale-110" icon={faFilePdf} />
          </Link>
          
          </div>
          
      </div>
     
    </div>
  )
}
