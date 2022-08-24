import React from "react";
import Navbar from "../components/organisms/Navbar";

export const ProjectDetails = () => {
  return (
    <div>
      <Navbar />

      <nav aria-label="breadcrumb" className="w p-2 mx-5 bg-opacity-60">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 bg-gray-100 rounded-lg bg-opacity-40">
            <div className="mb-5 text-4xl tracking-widest grid place-items-left p-5 ">
              <p className="text-3xl  text-gray-900 font-normal font-mono  text-left pb-4 ">
                INFO ABOUT PROJECT{" "}
              </p>
              <p className="text-2xl  text-gray-900 font-normal font-mono  text-left pb-2 border-t-2 border-dashed">
                Project name :{" "}
                <span className="font-bold text-xl">Example</span>
              </p>

              <p className="text-2xl  text-gray-900 font-normal font-mono  text-left pb-2">
                Technology : <span className="font-bold text-xl">Example</span>
              </p>
              <p className="text-2xl  text-gray-900 font-normal font-mono  text-left pb-2 border-b-2 border-dashed">
                Description :<span className="font-bold text-lg">Example</span>
              </p>
            </div>
          </div>

          <div class="bg-gray-100 rounded-lg bg-opacity-40">
            <div className="mb-5 text-4xl tracking-widest grid place-items-left p-5 ">
              <p className="text-3xl  text-gray-900 font-normal font-mono  text-left pb-4 ">
                INFO STATUS PROJECT{" "}
              </p>
              <p className="text-2xl  text-gray-900 font-normal font-mono  text-left pb-2 border-t-2 border-dashed">
                Code status :{" "}
                <span className="font-bold text-xl text-green-600">Done</span>
              </p>

              <p className=" flex text-2xl  text-gray-900 font-normal font-mono  text-left pt-2 p-2">
                Source code:
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Weniasss/ProgramCurrencyCalculator"
                  title="GitHub"
                  className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-coolGray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-13 h-13 "
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                </a>
              </p>

              <p className=" flex text-2xl  text-gray-900 font-normal font-mono  text-left pt-2 p-2 border-b-2 border-dashed">
                Score project:
                <div className="flex items-center space-x-2 text-yellow-500">
                  <span className="text-xl font-bold"> 4.5 </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                </div>
              </p>

              <div className="d-flex gap-5">
                <div className="flex justify-center mt-5">
                  <button class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring ">
                    <span class="absolute inset-0 border border-stone-600 group-hover:border-green-400"></span>
                    <span class="tracking-widest text-2xl block px-8 py-2 transition-transform bg-stone-600 border border-green-600 group-hover:border-green-500 group-hover:bg-green-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                      Sent Project
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div class="mt-5 bg-gray-100 rounded-lg bg-opacity-40 col-start-2 col-span-3">
            <p className="flex justify-center text-3xl  text-gray-900 font-normal font-mono  text-left pt-4  ">
              PROJECT REPORT{" "}
            </p>
            <div className="p-5">
              <p className="text-2xl  text-gray-900 font-normal font-mono  text-left border-t-2 border-dashed pt-2">
                {/* {assignment.report} */}
                Status Report :
                <span className="font-bold text-2xl text-green-900"> Done</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
