import "../App.css";
// import GoogleGenerativeAI from '@google/generative-ai'
import Input from "./Input";

export default function Home() {
  return (
    <div className="className='bg-gradient-to-t from-orange-500 to-slate-50 h-[100vh]'">
      <div>
        <img
          src="../shreerampng.png"
          alt="rampng"
          className="h-[80vh] w-fit sm:h-screen z-300 absolute left-[50%] top-[50%] -translate-y-2/4 -translate-x-2/4"
        />
        <img
          src="../bg.png"
          alt="bgimg"
          className="w-0 sm:w-[100%] sm:h-screen z-20 "
        />

        <div className="text-center absolute left-[50%] top-[7%] sm:top-[85%] -translate-y-2/4 -translate-x-2/4 h-fit bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent w-[100%]">
          <span className="mText text-[3rem] sm:text-[5rem] font-extrabold leading-normal ">
            जय श्री राम
          </span>
        </div>
        <Input />
      </div>
    </div>
  );
}
