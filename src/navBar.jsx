import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({t , changeLanguage}) {

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
        <div>
            <div  className='  bg-[#181a1a] mb-10 sm:h-auto flex justify-center items-center flex-col sm:flex-row py-10  '>
                <Link to='/ToDoApp' className='text-gray-100 text-2xl md:text-3xl pb-3 sm:py-0 hover:text-sky-500 transition-all'>{t('Home')}</Link>
                <Link to='/LoginPage' className='text-gray-100 text-2xl md:text-3xl px-10 hover:text-sky-500 transition-all'>{t('Login')}</Link>

                <div className='flex gap-4 items-center flex-col sm:flex-row pt-4 sm:pt-0 sm:pr-[3%] '>
                    <div className='flex  gap-4'>
                        <div onClick={setFirstTheme} className='w-9 h-9 rounded-full bg-gradient-to-r from-neutral-600 to-cyan-950 shadow-themes border opacity-75 hover:opacity-100'></div>
                        <div onClick={setSecendTheme} className='w-9 h-9 border rounded-full bg-gradient-to-b from-gray-800 to-yellow-500 opacity-75 hover:opacity-100 '></div>
                        <div onClick={setTheredTheme} className='w-9 h-9 border rounded-full bg-gradient-to-r from-cyan-500 to-blue-800 opacity-75 hover:opacity-100 '></div>
                    </div>
                    <select onClick={(e) => changeLanguage(e.target.value)} className='bg-[#181a1a] myInput  text-gray-50 border  text-sm rounded-xl focus:ring-blue-800 focus:border-blue-800 p-2 dark:bg-gray-800  dark:placeholder-gray-400 dark:focus:ring-blue-800 dark:focus:border-blue-800'>
                        <option value="en">{t('English')}</option>
                        <option  value="fa">{t('Persian')}</option>
                    </select>
                </div>
            </div>
        </div>
     );
}

export default NavBar;