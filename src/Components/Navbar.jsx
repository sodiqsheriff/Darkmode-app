import Alat from "../assets/Logo.png";

const Navbar = () =>{

    return(
     <>
     <div className="pl-0 py-2 flexc-col md:flex flex-row justify-between  md: md:px-28 items-center">
        <div>
            <img src={Alat} alt="Alat" />
        </div>
        <div className="hidden md:flex text-center space-x-10  text-gray-500 text-sm capitalize">
            <div>
                <a href="/">personal</a>
            </div>
            <div>
                <a href="/">business</a>
            </div>
            <div>
                <a href="/">about</a>
            </div>
            <div>
                <a href="/">features</a>
            </div>
            <div>
                <a href="/">Alat life</a>
            </div>
            <div>
                <a href="/">help</a>
            </div>
            <div>
                <a href="/">developer</a>
            </div>
        </div>

        <div className="hidden md:flex gap-4 text-sm">
            <a href="" className="px-3 py-2 border-2 border-gray-500 text-gray-500 rounded capitalize">login</a>
            <a href="" className="bg-white px-3 py-2 border-2-gray-500 capitalize rounded semi-bold">sign up</a>
        </div>
     </div>
     </>
    )
}

export default Navbar 