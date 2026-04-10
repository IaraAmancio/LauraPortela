import { useState } from 'react';
import LogoLaura from '../../assets/logo horizontal.png'
import { CgMenuRight, CgClose } from "react-icons/cg";

import { motion } from "framer-motion"


export function Header(){

    const [ isOpen, setIsOpen ] = useState(false);

    return(
        <header className='w-full fixed h-20 bg-white top-0 drop-shadow-xl z-50'>
            <nav className='w-6xl max-w-full mx-auto flex justify-between items-end px-2 py-4'>
                <a href='#'>
                        <img src={LogoLaura} className='h-12'/>
                </a>
                {/* desktop */}
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
                    <a href='#sobre'  className='relative font-semibold text-neutral-700
                    after:content-[""] after:h-0.5 after:w-full after:bg-gold-primary
                    after:block after:absolute after:left-0 after:-bottom-1 after:opacity-0
                    after:transition-all after:duration-300 after:pointer-events-none
                    hover:after:opacity-100
                     hover:text-gold-primary hover:transition hover:duration-300
                    '>Sobre</a>
                    <a href='#servicos'  className='relative font-semibold text-neutral-700
                    after:content-[""] after:h-0.5 after:w-full after:bg-gold-primary
                    after:block after:absolute after:left-0 after:-bottom-1 after:opacity-0
                    after:transition-all after:duration-300 after:pointer-events-none
                    hover:after:opacity-100
                     hover:text-gold-primary hover:transition hover:duration-300
                    '>Serviços</a>
                    <a href='#servicos'  className='relative font-semibold text-neutral-700
                    after:content-[""] after:h-0.5 after:w-full after:bg-gold-primary
                    after:block after:absolute after:left-0 after:-bottom-1 after:opacity-0
                    after:transition-all after:duration-300 after:pointer-events-none
                    hover:after:opacity-100
                     hover:text-gold-primary hover:transition hover:duration-300
                    '>Contato</a>
                </div>

                <div className='lg:hidden'>
                        <button onClick={() => setIsOpen(true)}>
                            {!isOpen && (<CgMenuRight size={36} className='text-gold-primary'/>)}
                        </button>
                </div>
            </nav>
                



            {/* mobile */}
                
                {
                    isOpen && (
                        <motion.div
                        initial={{opacity:0, x:50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration: 0.5}}
                        viewport={{once:false, amount:0.3}}
                        >
                            <div className='w-full py-4 flex flex-col  px-4 bg-white'>
                                <button className='self-end' onClick={()=>setIsOpen(!isOpen)}>
                                        <CgClose size={36} className='text-gold-primary cursor-pointer'/>
                                </button>
                                <nav className='self-start flex flex-col gap-8 mt-4'>
                                    <a href='#' className='relative font-semibold text-neutral-700 text-lg'>
                                        Home</a>
                                    <a href='#sobre'  className='relative font-semibold text-neutral-700 text-lg'>
                                        Sobre</a>
                                    <a href='#servicos'  className='relative font-semibold text-neutral-700 text-lg
                                    '>Serviços</a>
                                    <a href='#servicos'  className='relative font-semibold text-neutral-700 text-lg
                                    '>Contato</a>
                                </nav>
                            </div>
                        </motion.div>
                    )
                }
        </header>
    )
}