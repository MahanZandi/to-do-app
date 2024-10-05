import  { React , useRef} from 'react';
function Header() {
    const setFirstTheme = () =>{
        document.querySelector('body').removeAttribute('defulteClass')
        document.querySelector('body').setAttribute('data-theme' , 'firstTheme')
    };

    const setSecendTheme = () =>{
        document.querySelector('body').removeAttribute('defulteClass')
        document.querySelector('body').setAttribute('data-theme' , 'secendTheme')
    };

    const setTheredTheme = () =>{
        document.querySelector('body').removeAttribute('defulteClass')
        document.querySelector('body').setAttribute('data-theme' , 'theredTheme')
    };


    return ( 
        <div className='tilt-in-top-1'>
            <div className='flex justify-center sm:justify-end gap-10 sm:gap-4 pt-[3%] mr-[3%] '>
                <div onClick={setFirstTheme} className='w-9 h-9 rounded-full bg-gradient-to-r from-neutral-600 to-cyan-950 shadow-themes border opacity-75 hover:opacity-100'></div>
                <div onClick={setSecendTheme} className='w-9 h-9 border rounded-full bg-gradient-to-b from-gray-800 to-yellow-500 opacity-75 hover:opacity-100 '></div>
                <div onClick={setTheredTheme} className='w-9 h-9 border rounded-full bg-gradient-to-r from-cyan-500 to-blue-800 opacity-75 hover:opacity-100 '></div>
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
