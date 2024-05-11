import React from "react";

function Personal({data, setData}) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex  flex-row justify-between  mb-8">
        <div className="flex flex-col items-start mr-4 md:w-1/2">
          <label className="text-lg mb-2">First Name</label>
          <input
          className="bg-white px-3 py-2 border  border-slate-300 rounded-md text-md w-full"
          type="text" 
          placeholder="John" 
          value={data.firstname}
          onChange={(e)=>{
            setData((prevData)=>{
              return {...prevData, firstname:e.target.value}
            })
          }}
          />
          
        </div>
        <div className="flex flex-col items-start ml-2 md:w-1/2 ">
          <label className="text-lg mb-2">Last Name</label>
          <input
          className="bg-white px-3 py-2 border  border-slate-300 rounded-md text-md w-full"
          type="text" 
          placeholder="Doe" 
          value={data.lastname}
          onChange={(e)=>{
            setData((prevData)=>{
              return {...prevData, lastname:e.target.value}
            })
          }}/>
        </div>
      </div>
      <div className="flex flex-col items-start mb-8 w-full " >
        <label className="text-lg mb-2">Email</label>
        <input 
        className="bg-white px-3 py-2 border  border-slate-300 w-full rounded-md text-md  "
        type="email" 
        placeholder="johndoe@gmail.com" 
        value={data.email}
        onChange={(e)=>{
          setData((prevData)=>{
            return {...prevData, email:e.target.value}
          })
        }}/>
      </div>
      <div className="flex flex-col items-start mb-8 w-full">
        <label className="">Phone</label>
        <input
        className="bg-white px-3 py-2 border  border-slate-300 w-full rounded-md text-md  "
        type="text"
         placeholder="Enter your phofirstnamene number..."
         value={data.phone}
         onChange={(e)=>{
          setData((prevData)=>{
            return {...prevData, phone:e.target.value}
          })
        }} />
      </div>
    </div>
  );
}

export default Personal;
