
import './App.css'
import { Header } from './components/header'
import FotoLaura from './assets/laura03.jpeg'

function App() {

  return (
    <>
     <Header/>
     <main className='w-full'>
      <section className='w-full mx-auto h-[calc(100vh-6rem)] flex md:flex-row flex-col px-2 gap-4'>
        <div className='flex flex-1 flex-col justify-center'>
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
        <img src={FotoLaura} className='flex-1 h-full object-cover'/>      
      </section>

     </main>
    </>
  )
}

export default App
