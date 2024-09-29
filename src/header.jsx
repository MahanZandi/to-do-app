import  { React , useRef} from 'react';
function Header() {


    return ( 
        <div className='tilt-in-top-1'>
            <div className='flex justify-center sm:justify-end gap-10 sm:gap-4 pt-[3%] mr-[3%] '>
                <div className='w-9 h-9 rounded-full bg-gradient-to-r from-neutral-600 to-cyan-950 shadow-themes border opacity-75 hover:opacity-100'></div>
                <div className='w-9 h-9 border rounded-full bg-gradient-to-r from-sky-600 to-green-500 opacity-75 hover:opacity-100 '></div>
                <div className='w-9 h-9 border rounded-full bg-gradient-to-r from-slate-100 to-cyan-500 opacity-75 hover:opacity-100 '></div>
            </div>
            
            <div>
                <h1 className='text-gray-200 font-sans text-[64px] sm:text-[106px] flex justify-center pt-[40px] pb-[30px] '>
                    Just do it.
                </h1>
            </div>
        </div>
     );
}

export default Header;