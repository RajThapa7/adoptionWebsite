import React, {useEffect, useState} from 'react'
import { sliderData } from './sliderData';
import { FaCircle } from "react-icons/fa";

export default function Slider() {
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        let lastIndex = sliderData.length - 1;
        if(index > lastIndex - 1){
          setIndex(0)
        }
        if(index < 0){
          setIndex(lastIndex)
        }
        let slider = setInterval(()=>setIndex((index)=> index+1),5000);
        return ()=> clearInterval(slider)
      },[index]) ;

      const previous = () => {
        let newIndex = index-1;
        if (newIndex < 0) newIndex = sliderData.length-1;
        setIndex(() => newIndex)
      }
    
      const next = () => {
        let newIndex = index+1;
        if (newIndex > sliderData.length-1) newIndex = 0;
        setIndex(() => newIndex)
      }
  return (
<>
            <div className=' overflow-x-hidden mt-12  px-4 md:px-20  '>
        <div className='h-52 w-full flex flex-col-reverse  md:h-80 lg:h-[25rem]'>
        <img src={sliderData[index].img} className='object-cover min-w-full h-full transition-all duration-500 ease-in-out animate-appear rounded-lg'/>
        <div className='inline-flex space-x-2 absolute self-center mb-2 '>
        <button onClick={()=>previous()}><FaCircle className='text-white '/></button>
        <button onClick={()=>next()}><FaCircle className='text-white'/></button>
        </div>
        </div>
    </div>
       
      
</>
    )
}
