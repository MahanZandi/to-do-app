"use client"

import { React , useEffect, useState } from 'react';


function Clock() {
    const [time , setTime] = useState(
        new Date().toLocaleTimeString("fa" , { hour12 : true})
    );
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString("us" , { hour12 : true})) /* fa-IR ساعت به فرم ایران*/
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return ( 
        <div className='text-xl text-gray-200 font-[400] flex justify-center pt-10 mb-10 '>
            {time}
        </div>
     );
}

export default Clock;