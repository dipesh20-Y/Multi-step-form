import React from "react";

function Payment({data,setData}) {
  return (
    <div>
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start mb-8 w-full ">
          <label className="text-lg mb-2">Card Number</label>
          <input
            className="bg-white px-3 py-2 border  border-slate-300 w-full rounded-md text-md  "
            type="text"
            placeholder="Enter your card number"
            value={data.cardno}
            onChange={(e)=>{
              setData((prevData)=>{
                return {...prevData, cardno:e.target.value}
              })
            }}
          />
        </div>

        <div className="flex  flex-row justify-between  mb-8 w-full">
          <div className="flex flex-col items-start mr-4 md:w-1/2">
            <label className="text-lg mb-2">Expiration</label>
            <input
              className="bg-white px-3 py-2 border  border-slate-300 rounded-md text-md  w-full"
              value={data.date}
              type="date"
              onChange={(e)=>{
                setData((prevData)=>{
                  return {...prevData, date:e.target.value}
                })
              }}
            />
          </div>
          <div className="flex flex-col items-start ml-2 md:w-1/2">
            <label className="text-lg mb-2">CVV</label>
            <input
              className="bg-white px-3 py-2 border  border-slate-300 rounded-md text-md w-full "
              type="text"
              placeholder="CVV"
              value={data.cvv}
              onChange={(e)=>{
                setData((prevData)=>{
                  return {...prevData, cvv:e.target.value}
                })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
