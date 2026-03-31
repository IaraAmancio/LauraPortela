
import './App.css'
import { Header } from './components/header'
import FotoLaura from './assets/laura02.jpeg'
import FotoLaura2 from './assets/laura05.png'

function App() {

  return (
    <>
     <Header/>
     <main className='w-full bg-zinc-50/50'>
      <section className="w-full mx-auto h-[calc(100vh-6rem)] bg-[url('./assets/bg.png')] bg-cover bg-center  flex md:flex-row flex-col md:gap-4"
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

      <section id='sobre' className='w-full bg-gold-primary mx-auto pb-8 pt-24'>
        <div className='w-full max-w-5xl mx-auto flex md:flex-row flex-col items-center gap-4'>
          <div className='flex-1'>
            <img src={FotoLaura} className='rounded-md h-150 w-125 object-cover'/>            
          </div>

          <div className='flex-1'>
            <h1 className='text-5xl font-bold'>Excelência em Contabilidade</h1>
            <p>
              Oferecemos soluções contábeis personalizadas com foco em gestão financeira estratégica e compliance empresarial.
            </p>
          </div>
        </div>
        
      </section>

     </main>
    </>
  )
}

export default App
