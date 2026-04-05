
import './App.css'
import { Header } from './components/header'
import FotoLaura from './assets/laura02.jpeg'
import FotoLaura2 from './assets/laura05.png'
import IconeCalculadora from './assets/icone calculadora.svg'
import IconeGrafico from './assets/icone stonks.svg'
import IconeSegurança from './assets/icone seguranca.svg'
import { IoIosCalculator } from "react-icons/io";



import { motion } from "framer-motion"

function App() {

  return (
    <>
     <Header/>
     <main className='w-full bg-zinc-50/50'>
      <section className="w-full mx-auto h-[calc(100vh-6rem)] mt-24 bg-[url('./assets/bg.png')] bg-cover bg-center  flex md:flex-row flex-col md:gap-4"
      >      
        <div className='flex flex-1 flex-col justify-center px-4'>
          <div className='w-full md:max-w-10/12 mx-auto'>

              <h2 className='text-4xl font-semibold text-gold-primary'>Contadora</h2>
              <h1 className='md:text-7xl text-5xl font-bold text-gold-primary mb-2 -mt-3'>Laura Portela</h1>
              <p className='text-gray-primary/90 text-xl'>
               Especialista em contabilidade para Pessoa Física e Jurídica.
              <br></br><br></br>Cuido da burocracia para você focar no seu negócio, com organização e segurança.
              </p> 
          </div>                  
        </div>
        <img src={FotoLaura2} className='flex-1 h-full object-cover object-[center_10%]'/>      
      </section>

      <section id='sobre' className='w-full bg-[url("./assets/bg-cinza.png")] bg-cover mx-auto pb-8 pt-24'>
        <div className='w-full max-w-5xl mx-auto flex md:flex-row flex-col items-center gap-4'>
          <div className='flex-1'>
            <img src={FotoLaura} className='px-4 rounded-md h-150 w-125 object-cover'/>            
          </div>

          <div className='flex-1 flex flex-col gap-1 px-4'>
            <h1 className='md:text-5xl text-4xl font-bold text-white'>Excelência em <span className='text-gold-primary'>Contabilidade</span></h1>
            <p className='text-zinc-100 text-lg mt-4'>
              Ofereço soluções contábeis personalizadas com foco em gestão financeira estratégica e compliance empresarial.
            </p>
            <div className='mt-8 flex flex-col gap-6'>
              <motion.div
                 initial={{ opacity: 0, x: 100 }} // Estado inicial (invisível e abaixo)
                  whileInView={{ opacity: 1, x: 0 }}  // Estado final (visível e na posição)
                  transition={{ duration: 0.8 }}   // Duração da animação
                  viewport={{once:false, amount:0.3}}
              >
                <section className='flex items-center gap-4 transition-all hover:scale-105 hover:duration-300 cursor-default'>
                  <img src={IconeCalculadora} className='w-16'/>
                  <div>
                    <h1 className='font-semibold text-lg text-white'>Organização Financeira</h1>
                    <p className='text-base text-zinc-200 leading-5'>Sua contabilidade em dia, com números claros e sem complicação.</p>
                  </div>
                </section>  
              </motion.div>
            
              <motion.div
                initial={{ opacity: 0, x: 100 }} // Estado inicial (invisível e abaixo)
                  whileInView={{ opacity: 1, x: 0 }}  // Estado final (visível e na posição)
                  transition={{ duration: 0.8 }}   // Duração da animação
                  viewport={{once:false, amount:0.3}}
              >
                <section className='flex items-center gap-4 transition-all hover:scale-105 hover:duration-300 cursor-default'>
                  <img src={IconeGrafico} className='w-16'/>
                  <div>
                    <h1 className='font-semibold text-lg text-white'>Crescimento Sustentável</h1>
                    <p className='text-base text-zinc-200 leading-5'>Estratégias contábeis que ajudam seu negócio a evoluir com segurança.</p>
                  </div>
                </section>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, x: 100 }} // Estado inicial (invisível e abaixo)
                  whileInView={{ opacity: 1, x: 0 }}  // Estado final (visível e na posição)
                  transition={{ duration: 0.8 }}   // Duração da animação
                  viewport={{once:false, amount:0.3}}
              >
                <section className='flex items-center gap-4 transition-all hover:scale-105 hover:duration-300 cursor-default'>
                  <img src={IconeSegurança} className='w-16'/>
                  <div>
                    <h1 className='font-semibold text-lg text-white'>Segurança Fiscal</h1>
                    <p className='text-base text-zinc-200 leading-5'>Fique regularizado e evite problemas com o fisco.</p>
                  </div>
                </section>
              </motion.div>
            </div>
          </div>
        </div>
        
      </section>

      <section className='w-full mt-12 min-h-[calc(100vh-6rem)]' id='servicos'>
        <div className='max-w-5xl mx-auto flex flex-col items-center px-4'>
          <h1 className='md:text-5xl text-4xl font-bold text-gold-primary'>Meus Serviços</h1>
          <p className='text-lg text-gray-primary m-2'>Soluções completas em contabilidade e gestão financeira para o seu negócio</p>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-12'>
            <section className='bg-zinc-100/80 py-4 w-78 rounded-lg flex flex-col items-center justify-center px-2 transition-all hover:scale-105 hover:bg-zinc-200 shadow-2xl'>
                <IoIosCalculator size={90} color='#ba8a1b'/>
                <h3 className='text-xl mt-3 font-medium text-gray-primary'>Contabilidade Geral</h3>
                <p className='text-center text-sm text-gray-primary/95'>Escrituração contábil completa, balanços e demonstrações financeiras.</p>
            </section>
        
          </div>
        </div>
      </section>


     </main>
    </>
  )
}

export default App
