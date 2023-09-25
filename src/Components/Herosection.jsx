import google from '../assets/Googleplay.png'
import apple from '../assets/Appleplay.png'

const Hero =()=>{


    return(
      
        <>
        <div className="text-left p-5 md:text-center w-full text-white py-10">
            <div className="text-2xl font-bold pb-4 md:text-5xl md:font-bold ">
                <h1>
                Revolutionize the way you handle
                </h1>
                <h1 className="md:pt-2">
                    Finances and make Financial decisions.
                </h1>
            </div>
            <div className="text-xs text-white md:text-center md:text-lg tracking-wider my-5">
                    <h3>
                        Our cutting-edge technology and user-friendly platform make it easy for you
                    </h3>
                    <h3>
                        to manage your money,pay bills,invest and more,all in one place.
                    </h3>
            </div>
            <div className="flex justify-center gap-3">
                <a href="/" className="px-3 py-2 w-36 border-2 rounded border-gray-500"><img src={google} alt="google" /></a>
                <a href="/" className="px-3 w-36 py-2 border-2 rounded border-gray-500"><img src={apple} alt="apple" /></a>
            </div>

            <div className="flex justify-center gap-3 w-full pt-24">
                <a href="/" className='bg-white text-black px-6 text-semibold py-2 rounded-3xl'>Personal</a>
                <a href="/" className=' text-gray-500 border-2 border-gray-500 px-6 text-semibold py-2 rounded-3xl'>Business</a>
            </div>

            <div className="text-left text-2xl  md:text-center font-bold md:text-5xl pt-10">
                <h1 className='capitalize'>
                    make payments,budget,invest and bank
                </h1>
                <h1 className='capitalize md:pt-2'>
                    securely online on your phone
                </h1>
            </div>
            <div className="text-xs  text-gray-500 md:text-center tracking-wider md:text-lg mt-7">
                    <h3>
                        Our mission is to empower our users to take control of their finances and achieve their
                    </h3>
                    <h3>
                        financial goals. With our advanced algorithms and cutting-edge security measures,
                    </h3>
                    <h3>
                        we make it easy and safe for you to manage your money on the go.
                    </h3>
                    
            </div>
            <div className="flex justify-center pt-10">
            <a href="/" className='px-2 py-2 text-black font-semibold bg-white rounded capitalize'>get started now!</a>
            </div>
        </div>
        </>
    )
}

export default Hero