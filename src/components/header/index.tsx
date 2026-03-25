import LogoLaura from '../../assets/logo horizontal.png'
import { CgMenuRight } from "react-icons/cg";


export function Header(){
    return(
        <header className='w-full h-24'>
            <nav className='w-6xl max-w-full mx-auto flex justify-between items-end px-2 py-4'>
                <a href='#'>
                        <img src={LogoLaura} className='h-14'/>
                </a>
                <div className='hidden lg:flex gap-8'>
                    <a href='#' 
                    className='relative font-semibold text-neutral-700
                    after:content-[""] after:h-0.5 after:w-full after:bg-gold-primary
                    after:block after:absolute after:left-0 after:-bottom-1 after:opacity-0
                    after:transition-all after:duration-300 after:pointer-events-none
                    hover:after:opacity-100
                     hover:text-gold-primary hover:transition hover:duration-300
                    '>
                        Home</a>
                    <a href='#'  className='relative font-semibold text-neutral-700
                    after:content-[""] after:h-0.5 after:w-full after:bg-gold-primary
                    after:block after:absolute after:left-0 after:-bottom-1 after:opacity-0
                    after:transition-all after:duration-300 after:pointer-events-none
                    hover:after:opacity-100
                     hover:text-gold-primary hover:transition hover:duration-300
                    '>Sobre</a>
                    <a href='#'  className='relative font-semibold text-neutral-700
                    after:content-[""] after:h-0.5 after:w-full after:bg-gold-primary
                    after:block after:absolute after:left-0 after:-bottom-1 after:opacity-0
                    after:transition-all after:duration-300 after:pointer-events-none
                    hover:after:opacity-100
                     hover:text-gold-primary hover:transition hover:duration-300
                    '>Serviços</a>
                    <a href='#'  className='relative font-semibold text-neutral-700
                    after:content-[""] after:h-0.5 after:w-full after:bg-gold-primary
                    after:block after:absolute after:left-0 after:-bottom-1 after:opacity-0
                    after:transition-all after:duration-300 after:pointer-events-none
                    hover:after:opacity-100
                     hover:text-gold-primary hover:transition hover:duration-300
                    '>Contato</a>
                </div>
                <div className='lg:hidden'>
                    <CgMenuRight size={36} className='text-gold-primary'/>
                </div>
            </nav>
        </header>
    )
}