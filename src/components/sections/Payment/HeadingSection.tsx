import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const HeadingSection = () => {
    return (
        <div className='' >
            <div className='flex items-center gap-10 border-[1.5px] p-2 rounded-md'>
                <div>
                    <h2 className='lg:text-lg font-bold py-1'>Paris - Neuilly Sur Seine</h2>
                    <p className='text-slate-500'>Wed, 27 Mar 2024, 10:00</p>
                </div>
                <div>
                    <p><FaAngleRight /></p>
                </div>
                <div>
                    <h2 className='lg:text-lg font-bold py-1'>Paris - Neuilly Sur Seine</h2>
                    <p className='text-slate-500'>Sat, 30 Mar 2024, 10:00</p>
                </div>
            </div>
            
        </div>
    )
}

export default HeadingSection