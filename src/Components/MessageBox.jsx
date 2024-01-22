

function MessageBox({name, message}) {
  return (
    <div className='h-[200px] w-[400px] bg-white rounded-lg opacity-80 absolute top-[80%] left-[50%] -translate-y-2/4 -translate-x-2/4' >
      
        <div className='border-2 border-black rounded-lg w-[380px] h-[180px] absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4' >

            <div className='text-center flex flex-col items-center justify-center p-2 font-semibold' >
                <div className='text-lg font-bold' >Blessings For {name}</div>
                {message}
            </div>

        </div>

    </div>
  )
}

export default MessageBox
