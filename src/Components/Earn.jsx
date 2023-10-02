
import Earnphone from '../assets/savings.png'

const Earn =()=>{

    return(
        <>

<div className="flex flex-col px-5 md:flex md:flex-row justify-between items-center w-full my-24 md:px-32">

     
        <div className="w-full md:w-1/2">
          <img src={Earnphone} alt="Earphone" className='lg:w-4/5'/>
        </div>

        <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold md:text-white md:text-4xl pb-6">
               Earn interest on your
               <h2>
                savings ALAT and enjoy
                </h2> 

            </h2>

            <h2 className="text-xs md:text-sm text-white">
                We have your best interest at heart,We curated various savings
                <h2>
                   plans for you to make i easier to set aside money for the
                </h2>
                <h2>
                future and reach your financial goals</h2>
                
            </h2>

            <div className="pt-6 m">
                <a href="/" className="border-2 border-gray-700 text-gray-500 p-2 py-1 capitalize rounded hover:border-white ">start saving now  </a>
            </div>
        </div>

       </div>
        </>
    )
}

export default Earn