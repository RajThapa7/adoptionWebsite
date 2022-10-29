import React from 'react'

export default function AdoptionPoints({data}) {
  return (
    <>
    <div className='flex flex-row mt-16 w-full max-w-5xl mx-auto pr-4 md:px-8 '>
        <div className='ml-4 md:ml-6'>
            <div className='inline-flex'>
            <div className='rounded-full bg-pink-400  self-center px-4 py-2 font-bold text-white mr-4 '>{data.number}</div>
        <div className='font-bold text-xl self-center'>{data.title}</div>
            </div>
        <div className='mt-4 text-lg text-gray-800 font-normal text-justify whitespace-pre-wrap'>{data.desc}</div>
        
        </div>
    </div>
    </>
  )
}
