import lock from '../assets/safe.png'
import bag from '../assets/bag.png'
import card from '../assets/credit.png'
import trophy from '../assets/trophy.png'
import shield from '../assets/badge.png'
import call from '../assets/call.png'


const Section =()=>{

    return(
        <>
        <div className="text-left text-2xl p-5 md:text-center text-white md:text-4xl font-semibold md:pb-3">
          <h2>
            Everything you ever wanted
          </h2>
        </div>

        <div className="text-left p-5 md:text-center text-sm md:pt-4 text-gray-400">
          <h2>
            With our app,you can access your financial information anytime,anywhere,on any devices.
          </h2>
          <h2>
            This means you can track your spending,make payments, and manage your
          </h2>
          <h2>
            investments with just a few taps on your phone.
          </h2>

        </div>
        <div className="flex flex-col px-5 md:flex  md:flex-row justify-between gap-7 md:px-32 w-full mt-7">
          <div className=" bg-gray-950  md:w-4/5 rounded-2xl shadow-2xl text-white">
            <div className="w-full px-5 pt-10 pb-5">
                <div className=" pb-12 shadow-2xl ">
                <img src={lock} alt="lock"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                    a fully digital bank
                </h2>
                <h2 className="w-full text-sm">
                    Fund your account,save, and pay bills 
                    <h2> from anywhere in the world</h2>
                </h2>
            </div>
          </div>
          
          <div className=" bg-gray-950  md:w-4/5 rounded-2xl shadow-2xl text-white">
            <div className="w-full px-5 pt-10 pb-5">
                <div className=" pb-12 shadow-2xl ">
                <img src={bag} alt="bag"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                    Instant loans
                </h2>
                <h2 className="w-full text-sm">
                    Low on cash?Get low-interst short-term
                    <h2> loans in just one click</h2>
                </h2>
            </div>
          </div>
          <div className=" bg-gray-950  md:w-4/5 rounded-2xl shadow-2xl text-white">
            <div className="w-full px-5 pt-10 pb-5">
                <div className=" pb-12 shadow-2xl ">
                <img src={card} alt="card"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                    Free card delivery
                </h2>
                <h2 className="w-full text-sm">
                    Fund your account,save, and pay bills 
                    <h2> from anywhere in the world</h2>
                </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-5 md:flex  md:flex-row justify-between gap-7 md:px-32 w-full mt-7">
          <div className=" bg-gray-950  md:w-4/5 rounded-2xl shadow-2xl text-white">
            <div className="w-full px-5 pt-10 pb-5">
                <div className=" pb-12 shadow-2xl ">
                <img src={lock} alt="lock"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                    a fully digital bank
                </h2>
                <h2 className="w-full text-sm">
                    Fund your account,save, and pay bills 
                    <h2> from anywhere in the world</h2>
                </h2>
            </div>
          </div>
          
          <div className=" bg-gray-950  md:w-4/5 rounded-2xl shadow-2xl text-white">
            <div className="w-full px-5 pt-10 pb-5">
                <div className=" pb-12 shadow-2xl ">
                <img src={bag} alt="bag"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                    Instant loans
                </h2>
                <h2 className="w-full text-sm">
                    Low on cash?Get low-interst short-term
                    <h2> loans in just one click</h2>
                </h2>
            </div>
          </div>
          <div className=" bg-gray-950  md:w-4/5 rounded-2xl shadow-2xl text-white">
            <div className="w-full px-5 pt-10 pb-5">
                <div className=" pb-12 shadow-2xl ">
                <img src={card} alt="card"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                    Free card delivery
                </h2>
                <h2 className="w-full text-sm">
                    Fund your account,save, and pay bills 
                    <h2> from anywhere in the world</h2>
                </h2>
            </div>
          </div>
        </div>

        
       {/* <div className="flex flex-col px-5 md:flex md:flex-row justify-between gap-7 w-full md:px-32 mt-7 ">
        <div className=" bg-gray-950  md:w-4/5 rounded-2xl shadow-2xl text-white">
            <div className="w-full px-5 pt-10 pb-5">
                <div className=" pb-12 shadow-2xl ">
                <img src={trophy} alt="ltrophy"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                   smash savings
                </h2>
                <h2 className="w-full text-sm">
                    Take the pressure off saving with our
                    <h2> automated savings plan</h2>
                </h2>
            </div>
          </div>
          
          <div className=" bg-gray-950  md:w-4/5 rounded-2xl shadow-2xl text-white">
            <div className="w-full px-5 pt-10 pb-5">
                <div className=" pb-12 shadow-2xl ">
                <img src={shield} alt="shield"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                    secure payment
                </h2>
                <h2 className="w-full text-sm">
                   Bank online with an assured mind
                    <h2> towards security</h2> 
                </h2>
                
            </div>
          </div>
          <div className=" bg-gray-950  md:w-4/5 rounded-2xl shadow-2xl text-white">
            <div className="w-full px-5 pt-10 pb-5">
                <div className=" pb-12 shadow-2xl ">
                <img src={call} alt="call"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                   24/7customer support
                </h2>
                <h2 className="w-full text-sm">
                    Chat with us anytime and get reply 
                    <h2 className="w-full text-sm"> instantly</h2> 
                </h2>
                
            </div>
          </div>
    </div>*/}
        </>
    )
}

export default Section