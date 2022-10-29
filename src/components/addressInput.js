import React,{useState} from 'react'
import {provinces, districts, municipalities} from './addressData'
export default function AddressInput() {
    const [province, setProvince] = useState('');
    const [provinceId, setProvinceId] = useState('');
    const [district, setDistrict] = useState('');
    const [districtId, setDistrictId] = useState('');
    const [municipality, setMunicipality] = useState('');
    const handleProvinceChange = (e)=>{
        setProvinceId(e.target.value);
        const province = provinces.filter((item)=>item.pid == e.target.value)[0].name;
        setProvince(province) 
    }
    
    const handleDistrictChange = (e)=>{
        setDistrictId(e.target.value);
        const district = districts.filter((item)=>item.did == e.target.value)[0].name;
        setDistrict(district) 
    }
    
  return (
    <>
    <div className='flex flex-col space-y-3'>
        <div className='flex lg:flex-row flex-col space-y-3 lg:space-y-0 lg:space-x-4'>

        <select name="" id="" onChange={(e)=>handleProvinceChange(e)} className="lg:w-1/2 text-gray-700 bg-gray-100 border-2 border-slate-400 py-1 px-2 rounded-md   focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500">
            <option  selected disabled>Select Province</option>
            {provinces.map((item)=>{
                return (
                    <option value={item.pid} key={item.pid}>{item.name}</option>
                )
            })}
        </select>
        <select name="" id="" onChange={(e)=>handleDistrictChange(e)} className="lg:w-1/2  text-gray-700 bg-gray-100 border-2 border-slate-400 py-1 px-2 rounded-md   focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500" >
            <option selected disabled>Select District</option>
            {districts.filter((item)=>item.pid === provinceId).map((item, index)=>{
                return (
                    <option value={item.did} key={item.did}>{item.name}</option>
                )
            })}
        </select>
        </div>
      
        <div className='flex lg:flex-row flex-col space-y-3 lg:space-y-0 lg:space-x-4 '>

        <select name="" id="" onChange={(e)=>setMunicipality(e.target.value)} className="lg:w-1/2 text-gray-700 bg-gray-100 border-2 border-slate-400 py-1 px-2 rounded-md   focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500" required>
            <option  selected disabled >Select Municipality</option>
            {municipalities.filter((item)=>item.did === districtId).map((item, index)=>{
                return (
                    <option value={item.name} key={index}>{item.name}</option>
                )
            })}
        </select>
        <input
              type="text"
              name="fname"
              id="fname"
              className="lg:w-1/2 text-gray-700 bg-gray-100 border-2 border-slate-400 py-1 px-2 rounded-md valid:border-emerald-300  focus:outline-blue-400 [&:not(:placeholder-shown)]:focus:invalid:outline-red-500 [&:not(:placeholder-shown)]:focus:invalid:text-red-500 [&:not(:placeholder-shown)]:invalid:border-red-500 [&:not(:placeholder-shown)]:invalid:text-red-500"
              placeholder="enter tole name"
              required
            />
        </div>
    </div>
    </>
  )
}
