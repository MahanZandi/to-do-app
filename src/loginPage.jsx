import React from 'react';
import NavBar from './navBar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LoginPage() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };
    return ( 
        <div className='min-h-screen w-full tilt-in-top-1 font-sans'>
            <NavBar t={t} changeLanguage={changeLanguage}/>
            <form action="" className='flex justify-center'>   
                <div className='grid  h-0  sm:mt-10 w-96 mx-5 sm:mx-0 sm:w-[600px] md:w-[700px] lg:w-[800px] gap-4 sm:gap-7'>
                    <input className='h-12 rounded-2xl col-span-2 sm:col-span-1 outline-none text-gray-100 bg-[#181a1a] myInput p-4' placeholder={t('Name')} type="text" />
                    <input className='h-12 rounded-2xl col-span-2 sm:col-span-1 outline-none text-gray-100 bg-[#181a1a] myInput p-4' placeholder={t('Pass')} type="password" />

                    <div className=" rounded-2xl col-span-2 grid ">
                        <textarea className="py-3 px-4 rounded-xl  bg-[#181a1a]  text-gray-100  resize-none outline-none myInput  "  rows="3" placeholder={t('Comment')}></textarea>
                    </div>

                   <button type='submit' className='h-[40px] grid place-items-center col-span-2 sm:text-base box-border bg-zinc-100 rounded-2xl standard-button'>{t('Submit')}</button>

                </div>
            </form>
        </div>
     );
}

export default LoginPage;
