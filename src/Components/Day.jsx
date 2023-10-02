import cards from  '../assets/atm.png'


const Day =()=> {

    return(
       <>
       <div className="flex flex-col px-5 md:flex md:flex-row justify-between items-center w-full my-28 md:px-32">
        <div className="w-full pb-7 md:w-1/2">
            <h2 className="text-2xl text-white font-semibold md:text-white md:text-4xl md:pb-6">
               Grab an ALAT
               <h2>
                Debit card for free
                </h2> 

            </h2>

            <h2 className="text-xs md:text-sm text-white">
                Get an ALAT Debit card now and make money online payments easy
                <h2>
                    bills,transfer money to friends and family or even make
                </h2>
                <h2>
                    for you.Visit a WEMA Branch today to get yours
                </h2>
            </h2>

            <div className="pt-6">
                <a href="/" className="border-2 border-gray-700 text-gray-500 p-2 py-1 capitalize rounded hover:border-white ">get yours now </a>
            </div>
        </div>

        <div className="w-full md:w-1/2">
        <img src={cards} alt="Day" className='lg:w-4/5'/> 
        </div>
       </div>
       </>
    )
}

export default Day