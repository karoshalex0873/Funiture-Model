import { useState } from "react"
const Hero = () => {
    function customize(){
        const [customize, setCustomize] = useState('')
    }


  return (
    <div className=" px-1 py-2 container mx-auto ">
      <div className=" rounded-lg text-white bg-cyan-950"> 
         <div  className="">
         <h1 className=" text-center text-3xl font-bold py-4 " >The Arm-Chair 3D Model</h1>
         <div className=" py-4 space-y-1 flex flex-col  items-center justify-center">
            <div className="text-start">
                <p>Check out and customize the Air-Chair</p>
                <p>Change Colors of the Arm Chair</p>
            </div>
            <button className="bg-white text-cyan-950 text-md px-3  rounded-md">
            <img></img>
            customize
            </button>
         </div>
          <div className="flex flex-col items-center justify-center w-full h-full px-10 py-3" >
          the model appers here
            <div className=" border-red-500 border-2 w-full  h-[80vh]">
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Hero
