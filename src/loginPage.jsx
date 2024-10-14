import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LoginPage() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };
    return ( 
        <div className='min-h-screen w-full tilt-in-top-1 font-sans'>
            <div  className='  bg-[#181a1a] mb-10 sm:h-auto flex justify-center items-center flex-col sm:flex-row py-10  '>
                <h1 className='text-gray-100 text-2xl md:text-3xl '>{t('Contact')}</h1>
                <div className='text-gray-50 flex  items-center text-4xl pt-6 sm:pt-2 sm:pl-10'><MdEmail />
                    <div className='text-base p-3'>zandim221@gmail.com</div>
                </div>

                <div className='text-gray-50 flex items-center text-4xl pt-4 px-0 md:px-5'><IoMdCall />
                    <div className='text-base p-3'>09395526996</div>
                </div>        

                <div className='flex items-center pt-5 sm:pt-0 sm:pr-[3%] '>
                    <select onClick={(e) => changeLanguage(e.target.value)} className='bg-[#181a1a] myInput text-gray-50 border  text-sm rounded-xl focus:ring-blue-800 focus:border-blue-800 p-2 dark:bg-gray-800  dark:placeholder-gray-400 dark:focus:ring-blue-800 dark:focus:border-blue-800'>
                        <option value="en">{t('English')}</option>
                        <option  value="fa">{t('Persian')}</option>
                    </select>
                </div>
            </div>

            <form action="" className='flex justify-center'>   
                <div className='grid  h-0  sm:mt-10 w-96 mx-5 sm:mx-0 sm:w-[600px] md:w-[700px] lg:w-[800px] gap-4 sm:gap-7'>
                    <input className='h-12 rounded-2xl col-span-2 sm:col-span-1 outline-none text-gray-100 bg-[#181a1a] myInput p-4' placeholder={t('Name')} type="text" />
                    <input className='h-12 rounded-2xl col-span-2 sm:col-span-1 outline-none text-gray-100 bg-[#181a1a] myInput p-4' placeholder={t('Pass')} type="password" />

                    <div className=" rounded-2xl col-span-2 grid ">
                        <textarea className="py-3 px-4 rounded-xl  bg-[#181a1a]  text-gray-100  resize-none outline-none myInput  "  rows="3" placeholder={t('Comment')}></textarea>
                    </div>

                   <Link cla to='/ToDoApp' className='h-[40px] grid place-items-center col-span-2 sm:text-base box-border bg-zinc-100 rounded-2xl standard-button'>{t('Submit')}</Link>

                </div>
            </form>
        </div>
     );
}

export default LoginPage;
