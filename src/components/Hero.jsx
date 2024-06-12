import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10 '>
     <div className='flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-3xl font-bold'>Tarot</h1>
        <p className='text-start'>Bir grup arkadaş, Tarot fallarının kutsal kuralını pervasızca ihlal ettiğinde bilmeden, 
            lanetli kartların içinde hapsolmuş, anlatılamaz bir kötülüğü serbest bırakırlar. 
            Birer birer kaderle yüzleşirler ve ölümle yarışırlar.</p>
            <p>
                <span className=''>IMDB :</span>
                <span className='text-yellow-400 ms-2 font-semibold'>6.5</span>
            </p>
            <div className='flex gap-5'>
                <button className='p-2  bg-red-600 rounded hover:bg-red-700'>Film İzle</button>
                <button className='p-2  bg-blue-600 rounded hover:bg-blue-700'>Listeye Ekle</button>
            </div>
     </div>
     <div>
        <img className=' hero-img my-4 object-contain rounded max-h-[300px] ' src="https://image.tmdb.org/t/p/original/oavbmL3iddJUmC8nQjL6bLHwAP4.jpg" alt="" />
     </div>
    </div>
  )
}

export default Hero;
