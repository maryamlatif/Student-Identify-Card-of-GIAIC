import React from "react";
import Image from "next/image";
export default function idcard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex grow files items-center justify-center p-">
        <div className="bg-slate-200 p-12 rounded-lg shadow-lg max-w-3xl w-full flex items-center border-4 border-sky-300">
          {/* Background img */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[350px] max-h-[400px]">
              <Image
                src="/images/grg.jpeg"
                alt="background-img"
                width={350}
                height={400}
                objectFit="cover object-cover"
                className="opacity-10 " />
            </div>
          </div>

          {/* left section */}
          <div className="w-2/3 pr-4 pt-6 relative z-10">
            {/* logo side */}
            <img
              src="/images/Logo.png"
              alt=" Card Logo"
              className="absolute top-[-50px] left-0 w-16 h-18 z-10"
            />
            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Name:</strong>
              </span>
              <span className="text-black">Maryam</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Roll No:</strong>
              </span>
              <span className="text-black">00416449</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Distance learning:</strong>
              </span>
              <span className="text-black">No</span>
            </p><p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>City:</strong>
              </span>
              <span className="text-black">Karachi</span> </p>
               <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Center:</strong>
              </span>
              <span className="text-black">Governer House Karachi</span>
            </p>
            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Campus:</strong>
              </span>
              <span className="text-black">Main</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Days/Time:</strong>
              </span>
              <span className="text-black">Friday-09:00 AM-12:00 PM</span>
            </p>

            <p className="mb-2">
              <span className="text-sky-500">
                {""}
                <strong>Batch:</strong>
              </span>
              <span className="text-black">1</span> </p>
            {/* button section */}
            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 rounded-lg border border-grey-300 bg-blue-900 text-white items-center justify-center flex">
                <span
                  className="absolute inset-0 bg-slate-500"
                  style={{width: "50%" }}
                ></span>
                <span className="relative z-10">Q1 & WMD</span>
              </button>
            </div></div>
            {/* Right side */}
          <div className="w-1/3 text-center  relative z-10">
            <Image
              src={"/images/pic.jpg"}
              alt={"Profile picture"}
              width={800}
              height={800}
              className="rounded-lg mb-6 w-full "/>
            <p className="border-t-2 border-t-slate-400 pt-2 font-bold text-sky-500 mt-10 text-2xl">
              Authorize Sign</p>
          </div></div></div></div>
          );}
