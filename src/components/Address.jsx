import React from 'react'

function Address({data, setData}) {
  return (
    <div>
       
    <div className="flex flex-col items-start">

    <div className="flex flex-col items-start mb-8 w-full " >
        <label className='text-lg mb-2'>Municipality/VDC</label>
        <input 
        className="bg-white px-3 py-2 border  border-slate-300 w-full rounded-md text-md  "
        type="email" 
        placeholder="Name of your Municipality/ VDC"
        value={data.municipality}
        onChange={(e)=>{
          setData((prevData)=>{
            return {...prevData, municipality:e.target.value}
          })
        }} />
      </div>
      <div className="flex flex-col items-start mb-8 w-full">
        <label className='text-lg mb-2'>Ward Number</label>
        <input
        className="bg-white px-3 py-2 border  border-slate-300 w-full rounded-md text-md  "
        value={data.ward}
        type="number"
        onChange={(e)=>{
          setData((prevData)=>{
            return {...prevData, ward:e.target.value}
          })
        }}  />
      </div>
      <div className="flex  flex-row justify-between  mb-8 ">
        <div className="flex flex-col items-start mr-4 md:w-1/2">
          <label className="text-lg mb-2">City</label>
          <input
          className="bg-white px-3 py-2 border  border-slate-300 rounded-md text-md w-full "
          value={data.city}
          type="text" 
          placeholder="City Name" 
          onChange={(e)=>{
            setData((prevData)=>{
              return {...prevData, city:e.target.value}
            })
          }}/>
        </div>
        <div className="flex flex-col items-start ml-2 md:w-1/2 ">
          <label className="text-lg mb-2">Province Name</label>
          <input
          className="bg-white px-3 py-2 border  border-slate-300 rounded-md text-md w-full "
          type="text" 
          value={data.state}
          onChange={(e)=>{
            setData((prevData)=>{
              return {...prevData, state:e.target.value}
            })
          }}/>
        </div>
      </div>
      <div className="flex  flex-row justify-between  mb-8">
        <div className="flex flex-col items-start mr-4 md:w-1/2">
          <label className="text-lg mb-2">Zip Code</label>
          <input
          className="bg-white px-3 py-2 border  border-slate-300 rounded-md text-md w-full"
          value={data.zip}
          type="text" 
          placeholder="44600" 
          onChange={(e)=>{
            setData((prevData)=>{
              return {...prevData, zip:e.target.value}
            })
          }}/>
        </div>
        <div className="flex flex-col items-start ml-2 md:w-1/2">
          <label className="text-lg mb-2"> Country</label>
          <input
          className="bg-white px-3 py-2 border  border-slate-300 rounded-md text-md w-full "
          value={data.country}
          type="text" 
          placeholder="Nepal"
          onChange={(e)=>{
            setData((prevData)=>{
              return {...prevData, country:e.target.value}
            })
          }} />
        </div>
      </div>
      
    </div>
  
    </div>
  )
}

export default Address
