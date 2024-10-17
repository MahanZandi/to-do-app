import React from 'react';
import NavBar from './navBar';
import PersonPicture from './Images/personPicture.jpg';
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

    return ( 
        <div className='tilt-in-top-1 min-h-screen w-full font-sans'>
            <NavBar t={t} changeLanguage={changeLanguage}/>
            <div className='flex flex-col md:flex-row'>

                <div className='flex flex-col mx-3   bg-[#181a1a] rounded-b-2xl rounded-t-2xl '>
                    <img src={PersonPicture} alt="photo" className='rounded-t-2xl brightness-95 saturate-150' />
                    <div className=' rounded-b-2xl'>
                        
                        <marquee scrollamount="6" direction="left" className=' text-gray-200 text-base sm:text-lg p-2 flex justify-center'>{t('introduce yourself')}</marquee>
                        <div className='flex flex-row '>
                            


                                <div className='p-2 flex '>
                                    
                                    <div className='text-gray-50 flex justify-center items-center text-xl sm:text-4xl   '>
                                        <div className='flex hover:text-sky-500 justify-center items-center transition-all'>
                                            <MdEmail />
                                            <div className='text-base p-3 '>zandim221@gmail.com</div>
                                        </div>
                                    </div>

                                    <div className='text-gray-50 flex justify-center items-center text-xl sm:text-4xl   '>
                                        <div className="flex hover:text-sky-500 justify-center items-center transition-all">
                                            <IoMdCall />
                                            <div className='text-base p-3'>09395526996</div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                    </div>
                </div>

                <div className='bg-[#181a1a]  m-3 rounded-2xl '>
                    <div className='p-10'>
                        <h1 className='text-xl sm:text-2xl lg:text-5xl text-gray-200'>
                        {t("Im Front end developer")}
                        </h1>
                        <p className='text-base sm:text-lg lg:text-xl leading-10 text-gray-200 pt-8'>
                            {t('Description')}
                        </p>
                        
                        <div className=' py-4  text-gray-200'>       
                                <a className='pt-3 flex text-3xl sm:text-5xl items-center ' href="https://github.com/MahanZandi">
                                    <div className='roll-in-right hover:text-sky-500 transition-all flex items-center'>
                                        <AiFillGithub /> 
                                        <p className='text-xl sm:text-2xl pl-2'> {t('Click')} </p>
                                    </div>
                                </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
     );
}

export default Contact;

