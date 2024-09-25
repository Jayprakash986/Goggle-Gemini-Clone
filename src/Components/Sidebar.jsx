import React, { useContext, useState } from 'react'
import { IoMenu,IoSettings } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMessage, FaQuestion } from "react-icons/fa6";
// import { FaQuestion } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { Context } from '../context/Context';
function Sidebar() {
  const {prevPrompt,onSent,setRecentPrompt}=useContext(Context)
  const [extended,setExtended]=useState(false)

  const loadPrompt=async(prompt) => {
      setRecentPrompt(prompt)
      await onSent (prompt)
  }
  return (
    <>
    <div className='min-h-screen inline-flex flex-col justify-between bg-[#e4e7eb] py-[25px] px-[25px]'>
        <div>
        <IoMenu 
        onClick={() => setExtended(!extended)}
        className='text-2xl block cursor-pointer text-black ' />
        <div className='mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[15px] text-[14px] text-gray-500 cursor-pointer bg-gray-300 rounded-full'>
        <FaPlus className='text-2xl '/>
        {extended && <p>New Chart</p>}
        </div>
        

        { extended && <div className='flex flex-col'>
        <p className='mt-7 mb-5 text-gray-700'>Recent</p>

        {prevPrompt?.map((item,index) => {
         return(
          <div
           onClick={() => loadPrompt(item) }
          className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-pink-500'>
      <FaMessage className='text-2xl'/>
      <p>{item.slice(0,18) }...</p>
      </div>
         ) 
        })}
       
      </div>
    }
      </div>

      <div className='flex flex-col'>
          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-amber-400'>
          <FaQuestion className='text-2xl'/>
          {extended && <p>Help</p>}
          </div>

          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-amber-400'>
          <MdHistory  className='text-2xl'/>
          {extended && <p>Activity</p>}
          </div>

          <div className='flex items-center gap-2 p-2 pr-10 rounded-[50px] text-slate-700 cursor-pointer hover:bg-amber-400'>
          <IoSettings className='text-2xl'/>
          {extended &&<p>Settings</p>}
          </div>
      </div>
    </div>
    </>
    
  )
}

export default Sidebar