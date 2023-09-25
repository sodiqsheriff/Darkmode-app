

import google from  '../assets/Googleplay.png'
import apple from '../assets/Appleplay.png'


const Account =()=> {

    return(
       
       <div className="flex flex-col pl-5 pr-5 md:flex md:flex-row justify-between items-center w-full my-28 md:pl-32 md:pr-32">
        <div className="w-full pb-7 md:w-1/2">
            <h2 className="text-sm text-white pb-3">Try ALAT today</h2>
            
            <h2 className="text-2xl  text-white font-semibold md:text-white md:text-4xl md:pb-6">
               Create an account
               <h2>
                with ALAT in 30 minutes
                </h2> 

            </h2>
          
            
        </div>
        <div className="flex gap-3 w-full md:w-1/2">
                <a href="/" className="px-3 py-2 w-36 border-2 rounded border-gray-500"><img src={google} alt="google" /></a>
                <a href="/" className="px-3 w-36 py-2 border-2 rounded border-gray-500"><img src={apple} alt="apple" /></a>
            </div>
       </div>
       
    )
}

export default Account