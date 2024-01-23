import React, { useState } from "react";
import '../App.css'
import MessageBox from './MessageBox'
import Diya from './Diya'
import { useLocation } from "react-router-dom";


export default function Blessings() {
  const location = useLocation();
  const name = location.state;
  console.log(name);
  const message = `Dear ${name}, I bless you with a mind sharp as a diamond, a heart pure as a lotus, and a spirit strong as a lion. May you conquer all obstacles, achieve great success.`;
  return (
      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-screen w-screen">
        <div className=" z-10 sm:z-0 text-center text-[70px] sm:text-[200px] font-extrabold absolute left-[50%] top-[15%] sm:top-[48%] -translate-y-2/4 -translate-x-2/4 w-[100%] bg-gradient-to-tr from-amber-100 to-amber-50 bg-clip-text text-transparent">
          जय श्री राम
        </div>
        <div className="z-10">
          <div className="shads"></div>
          <Diya />
        </div>

        <MessageBox name={name} message={message} />
      </div>
  );
}
