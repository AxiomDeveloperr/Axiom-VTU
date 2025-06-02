import React, {useState} from "react";
import { useNavigate } from "react-router";

import {FaBars,
       FaBell,
       FaUserCircle,

} from "react-icons/fa"

export default function MakePayment() {

  const [formData, setFormData] =
  useState({
    meterNumber: '',
    meterType:'',
    provider:'',
    amount:'',
  })
  const navigate= useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form Data:', formData)
    navigate('/makepayment')
  }
  const [showSidebar, setShowSidebar] = useState(false);


  return(
    <div className="max-w-6xl mx-auto flex-1 max-sm:ml-4 max-sm:mr-4">
            <div className='md:hidden tertiary-color h-9 -ml-10  -mr-6'>

      <button onClick={() => setShowSidebar(!showSidebar)} className="lg:hidden  mr-4 flex justify-self-end">
        <FaBars className="text-xl primary-text mt-1 " />
        </button>
        </div>
        
        
       <div className="hidden md:flex justify-between mt-8  items-center mb-6">
                   <h2 className="text-xl font-bold xl:ml-44 sm:ml-64">Pay electric bill</h2>
                   <div className="flex items-center sm:mr-14 lg:mr-32 gap-4">
                     <button className="px-3 py-1 text-sm font-semibold  primary-text rounded hidden sm:hidden xl:block lg:block">
                       Upgrade to Merchant
                     </button>
                     <FaBell size={20} />
                     <FaUserCircle size={24} />
                   </div>
                 </div>
      
      {showSidebar && (
        <div
          className="fixed inset-0 z-50 bg-blue-100 bg-opacity-30"
          onClick={() => setShowSidebar(false)}
        >
          <div
            className="absolute top-0 left-0 w-64 bg-white h-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            
            
          </div>
        </div>
      )}

      
      <div className="p-4">
        <div className="xl:max-w-2xl sm:max-w-md mx-auto sm:ml-60 bg-white shadow-md rounded-lg p-6">
          
          <div className="flex justify-between mb-6 text-sm">
            <div className="flex-1 text-center  font-semibold border-b-2 primary-text mr-4 pb-1">
              Fill Info
            </div>
            <div className="flex-1 text-center font-semibold border-b-2 mr-4 pb-1">
              Make Payment
            </div>
            <div className="flex-1 text-center text-gray-400 border-b-2 border-gray-300 pb-1">
              View Receipt
            </div>
          </div>
          

  <div className=" max-w-md mx-auto mt-10 tertiary-color border-1 p-6 rounded-xl flex ">
    <div >
      <h2 className="text-xl  mb-5 text-center"> Electric Bill</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex ">
          <div className="w-1/2 max-sm:mr-1 md:mr-5">

          <label className="block md:pr-10 ">Meter Number</label>
          <input type="text"
                  name="meterNumber"
                  value={formData.meterNumber}
                  onChange={handleChange}
                  placeholder="1111777777" className="mt-2 block w-full focus:outline-none rounded-md border  tertiary-color px-3 py-1" />
             </div>
          <div className="w-1/2">

          <label className="md:mr-16">Meter Type</label>
          <select 
              name="meterType"
              value={formData.meterType}
              onChange={handleChange}
              className="mt-2 block w-full rounded-md border tertiary-color px-3 py-1"
              >
                <option value=""></option>
                <option value="prepaid">prepaid</option>
                <option value="postpaid">postpaid</option>
              </select>
          </div>

        </div>
        <div className="">
          <label className="block  justify-self-start">Provider</label>
          <select 
            name="provider"
            value={formData.provider}
            onChange={handleChange}
             className="border w-full tertiary-color rounded py-1"
            >
             
              <option value=""></option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="ogun">ogun</option>
              
            </select>
        </div>
        <div className="">
          <label className="block justify-self-start">Amount</label>
          <input 
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="$5000"
              className="tertiary-color border rounded w-full py-1"
              />
        </div>
            <button 
             
            type="submit" className="primary-color border rounded-md w-full py-1 ">Proceed</button>
      </form>
    </div>
  </div>
    </div>
    </div>
    </div>
 )
 }

  
