import React, { useState } from 'react'
import { useFetch } from '../customHook/useFetch'
export const HomeAbout = () => {

  const [savings, setSavings] = useState(10000);
  const [ledger, setLedger] = useState([])
  const {data,error,isLoading} = useFetch("https://jsonplaceholder.typicode.com/posts")
  console.log(data,"USe FEtch");
  console.log(error,"USe FEtch error");


  const depositHandler = () => {
    setLedger((prevLedger)=>{
      return [...prevLedger,"Deposited "];
    });
    setSavings((prevSavings)=>{
      return prevSavings + 1000;
    });
  };


  return (
    <div>
      {isLoading && <h1 className='text-3xl text-center text-white m-10 bg-slate-600'>Loading...</h1>}
      {
        data && data.map((item)=>(
          <div key={item.id}>
            <h1 className=' text-center text-white m-10 bg-red-500'>{item.title}</h1>
          </div>
        ))
      }
      {/* <h1 className='text-3xl text-center text-white m-10 bg-slate-600'>Saving Balance :{savings}</h1>
      <hr />
      <h2 className='text-2xl text-center text-white m-10 bg-slate-600'>Depossit Entries :[Savings Account]</h2>
      <ul className='text-center text-white m-10 bg-slate-600'>
        {ledger.map((entry,index)=>(
          <li key={index}>{entry}</li>
        ))}
      </ul>

      <button onClick={depositHandler} className='bg-blue-500 text-white p-2 rounded-md'>Deposit 1000</button> */}
    </div>
  )
}