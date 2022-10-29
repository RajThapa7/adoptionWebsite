import React,{useState, useEffect} from 'react'
import Navbar from './navbar'
import SingleCard from './singleCard'
import {data} from './adoptionList'
import Filter from './filter'
export default function SaveLife() {
  const [sex, setSex] = useState('')
    const [age, setAge] = useState('')
    const [result, setResult] = useState(['']);
 console.log(sex)
 console.log(age)

const sexFilter = (array)=>{
  if(sex === 'Male') return array.filter((items)=>items.sex == "Male")
  if(sex === 'Female') return array.filter((items)=>items.sex == "Female")
  else return array;
}

const ageFilter = (array)=>{
  if(age === 'less than 1 month') return array.filter((items)=>items.age = 'less than 1 month');
  if(age === 'Between 1 and 3 month') return array.filter((items)=>items.age = 'Between 1 and 3 month')
  if(age === 'Around 6 month') return array.filter((items)=>items.age = 'Around 6 month')
  if(age === '1 to 1.5 year') return array.filter((items)=>items.age = '1 to 1.5 year')
  if(age === 'More than 2 year') return array.filter((items)=>items.age = 'less than 1 month')
  else return array;
}
useEffect(()=>{
  let result = data;
result = sexFilter(result);
result = ageFilter(result);
setResult(result);
}, [sex, age, data])

console.log(result);
 return (
    <>
    <Navbar></Navbar>
    <div className='px-8 py-8 '>
      <Filter setSex={setSex} setAge={setAge}></Filter>
      <div className='grid md:grid-cols-2 gap-x-10 gap-y-16'>

{
  result.map((items, index)=>{
    const {name, age, sex, img, description, id} = items;
    return <SingleCard name={name} age={age} sex={sex} img={img} description={description} Id={id} key={id}/>
  })
}
      </div>
    
    </div>
    </>
  )
}
