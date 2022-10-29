import React,{useState} from 'react'

export default function Filter({setSex, setAge}) {
  return (
   <>
   <div className='flex flex-row w-full py-2 pb-7'>
    <p className='w-1/5 font-bold'>Filter by:</p>
    <div className='w-2/5 flex flex-col md:flex-row space-x-2'>
        <p className='self-center '>Sex:</p>
        <select name="sex" id="" className='px-2 py-1 rounded-full bg-gray-200 text-gray-600' onChange={e=>setSex(e.target.value)}>
        <option value="none" selected disabled hidden>Select One</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Both">Both</option>

        </select>
    </div>
    <div className='w-2/5 flex flex-col space-x-2 md:flex-row'>
        <p className='self-center'>Age:</p>
        <select name="age" id="" className='px-2 py-1 rounded-full bg-gray-200 text-gray-600' onChange={e=>setAge(e.target.value)}>
        <option value="none" selected disabled hidden>Select One</option>
            <option value="less than 1 month">less than 1 month</option>
            <option value="Between 1 and 3 month">Between 1 and 3 month</option>
            <option value="Around 6 month">Around 6 month</option>
            <option value="1 to 1.5 year">1 to 1.5 year</option>
            <option value="More than 2 year">More than 2 year</option>
            <option value="Any age">Any age</option>

        </select>
    </div>
   </div>
   </>
  )
}
