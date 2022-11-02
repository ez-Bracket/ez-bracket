import { ButtonDefault } from '../Button';

export const HomeMainSection = () => {
    return  <section className='bg-home bg-cover flex flex-col items-center justify-center h-screen'>
                <div className='absolute bg-gray-300 h-screen w-screen opacity-80  shadow-[0_100px_100px_#1D1B2D]'>
                </div>
                <h1 className='text-green-100 text-4xl text-center break-all w-[24ch] relative'>Gerencie os seus torneios de forma ráida e gratuita!</h1>
                <p className='mt-[32px] mb-[64px] text-white relative'>Crie os seus campeonatos, convide os seus amigos e se divirta</p>
                <ButtonDefault onClick={()=>{}} text="Comece agora" isLoading={false}/>
            </section>
}