import  {useContext} from 'react'
import { Context } from '../context/Context.jsx';
import { FaRegUserCircle,FaLightbulb,FaRobot,FaSkull,FaImage,FaMicrophoneAlt } from "react-icons/fa";
import { FaCompass } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import geminiLogo from '../assets/geminiLogo.png'
const MainContent = () => {
  const{
    input,
    setInput,
    recentPrompt,
    setrecentPrompt,
    prevPrompt,
    setprevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  }=useContext(Context)

  return (
    <>
    <div className='flex-1  pb-[15vh] relative bg-red-200 w-screen '>
      <div className='flex flex-row items-center justify-between text-2xl p-5 text-sky-700 '>
        <p className='flex-grow'>Gemini</p>
        <FaRegUserCircle />
        </div>

       <div className='max-w-[900px] mx-auto'>
        {!showResult ? (
        <>
        <div className='my-12 text-[56px]  font-semibold p-5'>
          <p>
            <span className='bg-gradient-to-r from-[#c231a0] via-[#eab308] to-[#3676b9] bg-clip-text text-transparent '>Hello,Jayprakash.</span>
          </p>
          <p className='text-gray-400'>How can I help you today ?</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 items-center'>
          <div className='h-[200px] p-4 bg-gray-400 rounded-lg relative cursor-pointer hover:bg-gray-600'>
            <p>Suggest Top 10 Hunted Movies</p>
            <FaCompass className='text-4xl bottom-2 right-2 absolute p-1'/>
          </div>

          <div className='h-[200px] p-4 bg-gray-400 rounded-lg relative cursor-pointer hover:bg-gray-600'>
            <p>What is Dom in Javascript ?</p>
            <FaLightbulb className='text-4xl bottom-2 right-2 absolute p-1'/>
          </div>

          <div className='h-[200px] p-4 bg-gray-400 rounded-lg relative cursor-pointer hover:bg-gray-600'>
            <p>Write a Short Story</p>
            <FaSkull  className='text-4xl bottom-2 right-2 absolute p-1'/>
          </div>

          <div className='h-[200px] p-4 bg-gray-400 rounded-lg relative cursor-pointer hover:bg-gray-600'>
            <p>Imagine U as a AI</p>
            <FaRobot className='text-4xl bottom-2 right-2 absolute p-1'/>
          </div>
        </div>
        </>
         )   :  (
         
         <div className='py-0 px-[5%] max-h-[70vh] overflow-y-scroll'> 
         <div className='my-10 mx-0 flex items-center gap-5 text-black'>
         <FaRegUserCircle  className='text-3xl'/>

         <p>{recentPrompt}</p>
         </div>
         
          <div className='flex items-start gap-5'>
              <img src={geminiLogo} alt="" className='rounded-[50%] w-8'/>

                {loading ?
                (
                  <div className='flex flex-col gap-2 w-full'>
                    <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#7171e2] via-[#d5cece] to-[#7171e2] p-4 animate-scroll-bg'/>
                    <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#7171e2] via-[#d5cece] to-[#7171e2] p-4 animate-scroll-bg'/>
                    <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#7171e2] via-[#d5cece] to-[#7171e2] p-4 animate-scroll-bg'/>
                    <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#7171e2] via-[#d5cece] to-[#7171e2] p-4 animate-scroll-bg'/>
                  </div>
                )
                :
                (<p dangerouslySetInnerHTML={{__html:resultData}} className='text-black text-lg font-[400] leading-[1.8]'></p>)
                }
              
          </div>
         </div>)}
       

        <div className='absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5'>
          <div className='flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full'>
              <input  
              type="text" 
              placeholder='Enter a Promp Here'
              className='flex-1 bg-transparent border-none outline-none p-2 text-lg text-black '
              value={input}
              onChange={(e) => setInput(e.target.value)}
              />

              <div className='flex gap-4 text-black'>
              <FaImage  className='text-2xl cursor-pointer'/>
              <FaMicrophoneAlt className='text-2xl cursor-pointer'/>
              <IoSendSharp
              onClick={() => onSent()} 
              className='text-2xl cursor-pointer'/>
              </div>
          </div>
          <p className='text-sm my-4 mx-auto text-center font-[500] text-slate-600'>Gemini may display inaccurate info,including about people,so double-check its responses</p>
        </div>
       </div>
    </div>
    </>
    
  )
}

export default MainContent