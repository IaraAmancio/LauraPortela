
import './App.css'
import { Header } from './components/header'
import FotoLaura from './assets/laura01.png'
import FotoLaura2 from './assets/laura02.jpeg'

function App() {

  return (
    <>
     <Header/>
     <main className='w-full'>
      <section className='w-full max-w-5xl mx-auto h-[calc(100vh-6rem)] flex md:flex-row flex-col px-2 gap-4'>
        <div className='flex flex-1 flex-col justify-center'>
          <div className='w-4/5'>
            <h2 className='text-2xl font-bold text-gray-primary'>Contadora</h2>
              <h1 className='text-6xl font-bold text-gold-primary mb-6'>Laura Portela</h1>
              <p className='text-gray-primary/90'>
                Especialista em contabilidade digital para Pessoa física e Jurídica.
                Eu cuido da parte burocrática para você cuidar do seu negócio.
                <br></br><br></br>Qualquer pessoa pode ter um negócio organizado só basta ter o contador certo.
              </p>
              <button className='w-full mt-4 bg-gold-primary text-white rounded-md h-9'>
                SOLICITAR CONSULTORIA
              </button>
          </div>
          
        </div>
        <img src={FotoLaura} className='flex-1 h-full object-cover'/>      
      </section>

      <section id='sobre' className='w-full relative bg-gold-primary mx-auto pb-8 pt-24'>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-25"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C240,80 480,240 720,160 C960,80 1200,240 1440,160 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>
        <div className='w-full max-w-5xl mx-auto flex items-center gap-4'>
          <div className='flex-1'>
            <img src={FotoLaura2} className='rounded-md h-150 w-125 object-cover'/>            
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
