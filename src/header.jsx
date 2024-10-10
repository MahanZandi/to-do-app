import  { React } from 'react';
import { MdGTranslate } from "react-icons/md";


function Header({changeLanguage , t}) {
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
                {/* <div onClick={changeLanguage('en')} className="flex justify-center items-center text-gray-900 w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 shadow-themes border opacity-75 hover:opacity-100 text-2xl"><MdGTranslate /></div> */}
                <select onClick={(e) => changeLanguage(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                    <option value="en">English</option>
                    <option value="fa">Persian</option>
                </select>
                <div onClick={setFirstTheme} className='w-9 h-9 rounded-full bg-gradient-to-r from-neutral-600 to-cyan-950 shadow-themes border opacity-75 hover:opacity-100'></div>
                <div onClick={setSecendTheme} className='w-9 h-9 border rounded-full bg-gradient-to-b from-gray-800 to-yellow-500 opacity-75 hover:opacity-100 '></div>
                <div onClick={setTheredTheme} className='w-9 h-9 border rounded-full bg-gradient-to-r from-cyan-500 to-blue-800 opacity-75 hover:opacity-100 '></div>
            </div>
            
            <div>
                <h1 className='text-gray-200 font-sans text-[64px] sm:text-[106px] flex justify-center pt-[40px] pb-[30px] '>
                    {t('header')}
                </h1>
            </div>
        </div>
     );
}

export default Header;
