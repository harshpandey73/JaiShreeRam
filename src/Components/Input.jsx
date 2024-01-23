import React, { useId, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Input() {
    const inputRef = useRef(null);
    const id = useId();
    const [name, setName] = useState("");
    const navigate = useNavigate();
    
    function handleClick (){ 
      setName(inputRef.current.value);
      navigate("/blessings", {state : name});
      console.log("Clicked");
    }

  return (
    <div className="z-40 absolute left-[50%] top-[65%] -translate-y-2/4 -translate-x-2/4 bg-gradient-to-r from-slate-900 to-slate-700 w-[300px] h-[130px] rounded-lg py-4 px-4">
    <div className="flex flex-col items-center justify-center">
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-14">
            <input
              ref={inputRef}
              id={id}
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="peer w-full h-full bg-transparent text-white outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white  placeholder-shown:border-t-white  border focus:border-2 border-t-transparent focus:border-t-transparent font-semibold text-lg px-3 py-2.5 rounded-[7px] border-white  focus:border-white "
              placeholder=" "
            />
            <label 
            htmlFor={id}
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-semibold !overflow-visible truncate peer-placeholder-shown:text-white  leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white  peer-focus:text-white  before:border-white  peer-focus:before:!border-white  after:border-white  peer-focus:after:!border-white ">
              Your Name
            </label>
          </div>
          </div>
        <button
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none my-2"
          type="submit"
          onClick={()=>handleClick()}
          >
          Get Blessings
        </button>
    </div>
    </div>
  );
}

export default Input;
