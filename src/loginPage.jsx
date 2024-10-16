import React from 'react';
import NavBar from './navBar';
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
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

                    <div className='bg-[#181a1a] p-4 text-gray-100 col-span-2 sm:col-span-1 myInput grid rounded-2xl'>
                        <h1 >{t('introduce yourself')}</h1>
                        <p className='pt-1.5'> {t('Description')} </p>
                        <a className='pt-3 flex text-4xl items-center ' href="https://github.com/MahanZandi">
                            <div className='hover:text-sky-500 transition-all flex items-center'>
                                <AiFillGithub /> 
                                <p className='text-lg pl-2'> {t('Click')} </p>
                            </div>
                        </a>
                    </div>

                    <div className='grid col-span-2 sm:col-span-1 bg-[#181a1a] rounded-2xl myInput'>
                        <div className='text-gray-50 flex justify-center items-center text-4xl pt-2 sm:pl-10  '>
                            <div className='flex hover:text-sky-500 transition-all'>
                                <MdEmail />
                                <div className='text-base p-3'>zandim221@gmail.com</div>
                            </div>
                        </div>

                        <div className='text-gray-50 flex justify-center items-center text-4xl pt-2 px-0 md:px-5  '>
                            <div className="flex hover:text-sky-500 transition-all">
                                <IoMdCall />
                                <div className='text-base p-3'>09395526996</div>
                            </div>
                        </div> 
                    </div>
                </div>
            </form>
        </div>
     );
}

export default LoginPage;