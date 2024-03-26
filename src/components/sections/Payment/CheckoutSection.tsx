import React, { useEffect } from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { PiBagSimpleDuotone } from "react-icons/pi";
import { RxTimer } from "react-icons/rx";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiSchoolBag } from "react-icons/gi";
import { GiGearStickPattern } from "react-icons/gi";
import DriversDetails from './DriversDetails';
import ProtectionPart from './ProtectionPart';
import BillingAddress from './BillingAddress';
import PaymentPart from './PaymentPart';
import TermsCondition from './TermsCondition';
import './CheckoutSection.css'; 
import Rightside from './Rightside';

const CheckoutSection = () => {
    return (
        <div className="">
            <div className='mt-8'>
                <p className='text-blue-600 '>Back to Protection Options</p>
                <h2 className='text-3xl font-bold py-2'>Checkout</h2>
                <h4>Next... Confirmation</h4>
            </div>
            <div className='lg:flex gap-5'>
                <div className='lg:w-[70%]'>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className="divider divider-primary"></div>
                        <div className="divider divider-primary"></div>
                        <div className="divider divider-primary"></div>
                    </div>
                    <div className='bg-green-100 border-[1.5px] border-green-700 p-4 rounded-md'>
                        <div className=' flex items-start gap-3'>
                            <FaRegCircleCheck className='mt-1 text-xl' />
                            <div>
                                <h2 className='text-xl font-bold'>It's almost time to hit the road</h2>
                                <h3>Book now and make sure there's a car waiting for you</h3>
                            </div>
                        </div>
                    </div>
                    <div className=' my-5 rounded-md p-2 border-[1.5px]'>
                        <div className='lg:flex gap-10'>
                            <figure>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qvKvmXKXB2ibBRashkWx4HVNF_JN7_CQM6YgmwFjM1dr_hYRaQVi7pP3Z_-NQIYc_RU&usqp=CAU" alt="" />
                            </figure>
                            <div>
                                <h2 className='text-2xl font-bold'>Renult Clio <small className='text-base font-normal'>or similar small car</small></h2>
                                <div>
                                    <div className='flex items-center gap-16 pt-4 lg:text-base text-sm'>
                                        <div>
                                            <h2 className='flex items-center gap-2 py-2'><FaRegUser /> 4 Seats</h2>
                                            <h2 className='flex items-center gap-2 '><PiBagSimpleDuotone /> 1 Large bag <RxTimer /></h2>
                                        </div>
                                        <div>
                                            <h2 className='flex items-center gap-2 py-2'><GiGearStickPattern /> Manual</h2>
                                            <h2 className='flex items-center gap-2'><GiSchoolBag />1 small bag <RxTimer /></h2>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='flex items-center gap-2 text-green-300 pt-3 pb-7'>
                                            <BsSpeedometer2 /> Unlimited mileage
                                        </h2>
                                        <h2 className='text-lg'>Paris - Neuilly Sur Seine</h2>
                                        <p className='text-[14px]'>Downtown</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='my-3 mx-2' />
                        <div className='flex gap-5 py-2 px-2'>
                            <img src="https://www.advisorkhoj.com/resources/images/articles/Countrys-Budget-Affect-Common-Man/Countrys-Budget-Affect-Common-Man.jpg" alt="" className='h-10 border p-1 px-2' />
                            <h2 className='bg-sky-600 text-xl font-bold rounded-t-lg rounded-br-lg flex items-center justify-center p-1 text-white'>8.4</h2>
                            <div>
                                <h1 className='font-bold'>Very good</h1>
                                <h2 className='text-sm '>100+ reviews</h2>
                            </div>
                        </div>
                    </div>
                    <DriversDetails />
                    <ProtectionPart />
                    <BillingAddress />
                    <PaymentPart />
                    <TermsCondition />
                </div>
                <div className='lg:w-[30%] sidebar lg:mt-8'>
                    <Rightside></Rightside>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSection;
