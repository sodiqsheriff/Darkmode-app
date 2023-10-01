import React from "react";

function SectionProps (props) {
    return (
        <div className=" w-full  bg-gray-950 border border-gray-700 md: rounded-2xl  md:border-2 md:border-gray-700 text-white px-5 pt-10 pb-5 ">
           
                <div className=" pb-12 shadow-2xl ">
                <img src={props.imgURL} alt="lock"  />
                </div>
                <h2 className=" font-semibold capitalize pb-3">
                    {props.title}
                </h2>
                <h2 className="w-full text-sm">
                  {props.text}
                </h2>
           
          </div>
    )
}


function CreateSectionProps(details){
    return( 
        <SectionProps key={details.id} imgURL={details.imgURL} title={details.title} text={details.text} />
    )
}
export default SectionProps;
export {CreateSectionProps};