import React from "react";
import sectionInfo from "../js/sectionInfo";
import {CreateSectionProps} from "../props/SectionProps";

function Section () {

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
        <div className="flex flex-col px-5 w-sm justify-between gap-7 mt-7 md:grid grid-cols-2 md:px-28 lg:grid lg:grid-cols-3 lg:px-32">
          {sectionInfo.map(CreateSectionProps)}
        </div>
        </>
    )
}

export default Section