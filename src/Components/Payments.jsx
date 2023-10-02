import Payphone from '../assets/payment.png'


const Pay =()=> {

    return(
       <>
       <div className="flex flex-col-reverse px-5 md:flex md:flex-row justify-between items-center w-full my-16 md:px-32">
        <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold md:text-white md:text-4xl pb-6">
               Pay with comfort,
               <h2>
                anytime and anywhere
                </h2> 

            </h2>

            <h2 className="text-xs md:text-sm text-white">
                Easily and securely make transactions from your device,quickly pay
                <h2>
                    bills,transfer money to friends and family or even make
                </h2>
                <h2>
                    purchases online or in-store with justfew taps.
                </h2>
            </h2>

            <div className="pt-6">
                <a href="/" className="border-2 border-gray-700 text-gray-500 p-2 py-1 capitalize rounded hover:border-white ">get started now </a>
            </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src={Payphone} alt="Payphone" className='lg:w-4/5'/>
        </div>
       </div>
       </>
    )
}

export default Pay