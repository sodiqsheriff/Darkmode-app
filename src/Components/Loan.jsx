import Loanphone from '../assets/loan.png'

const Loan =()=>{

    return(
        <>

<div className="flex flex-col px-5 md:flex md:flex-row justify-between items-center w-full my-16 md:px-32">

     
        <div className="w-full md:w-1/2">
          <img src={Loanphone} alt="Loanphone" className='md:w-4/5'/>
        </div>

        <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold md:text-white md:text-4xl pb-6">
               Need quick cash,
               <h2>
                apply for a loan in seconds
                </h2> 

            </h2>

            <h2 className="text-xs md:text-sm text-white">
                Get low-interest short-term loans whenever you're in
                <h2>
                   one click.*Terms and conditions apply.*
                </h2>
                
            </h2>

            <div className="pt-6">
                <a href="/" className="border-2 border-gray-700 text-gray-500 p-2 py-1 capitalize rounded hover:border-white ">apply now </a>
            </div>
        </div>

       </div>
        </>
    )
}

export default Loan