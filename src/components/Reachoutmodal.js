import React, { useState } from 'react';
import logo from "../images/logo.svg";
import arrow from "../images/whitearrow.svg";
import 'react-phone-input-2/lib/style.css';
import modalclose from "../images/modalclose.svg";
import PhoneInput from 'react-phone-input-2';

const Reachoutmodal = ({ isOpen, onClose }) => {
    const [phone, setPhone] = useState('');

    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="bg-[#F4F7F9] max-sm:py-[20px] sm:p-[20px] rounded-none w-full h-full relative overflow-auto">
                    <div className="h-full w-full">
                        <div className='container'>
                            <div>
                                <div className='flex justify-between'>
                                    <img src={logo} alt="logo" className='max-md:max-w-[120px]'/>
                                    <button onClick={onClose} className="w-[40px] h-[40px] flex justify-center items-center border border-solid rounded-[50%] border-[#DBE3EB] hover:bg-[#DBE3EB] transition-all duration-[0.4s]">
                                        <img src={modalclose} alt="close" />
                                    </button>
                                </div>
                                <div className='max-md:mt-[25px] md:mt-[40px]'>
                                    <span className='block text-center text-blue font-poppins max-md:text-[22px] md:text-[26px] font-semibold leading-normal capitalize'>Reach Out</span>
                                </div>
                                <div className='max-md:mt-[22px] md:mt-[30px] w-full max-w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[600px] mx-auto rounded-[20px] bg-white max-sm:pt-[22px] sm:pt-[25px] md:pt-[30px] lg:pt-[40px] max-sm:px-[20px] sm:px-[25px] md:px-[30px] lg:px-[50px] max-sm:pb-[22px] sm:pb-[25px] md:pb-[30px] lg:pb-[50px]'>
                                    <form action="">
                                        <div className='mb-[20px]'>
                                            <label for="name" class="block mb-[10px] text-blue font-poppins text-[14px] font-semibold leading-normal capitalize">Full Name*</label>
                                            <input type="text" id="name" name="name" placeholder='John Doe' class="w-full rounded-[7px] border border-solid border-[#E5E5E5] bg-white max-md:py-[10px] md:py-[14px] px-[12px] text-blue font-poppins text-[14px] font-normal leading-[157%] outline-none focus:border-[#8CBC3F] placeholder:text-[#45647BCC] placeholder:font-poppins placeholder:text-[14px] placeholder:leading-[157%]"></input>
                                        </div>
                                        <div className='mb-[20px]'>
                                            <label for="email" class="block mb-[10px] text-blue font-poppins text-[14px] font-semibold leading-normal capitalize">Email*</label>
                                            <input type="email" id="email" name="email" placeholder='johndoe@gmail.com' class="w-full rounded-[7px] border border-solid border-[#E5E5E5] bg-white max-md:py-[10px] py-[14px] px-[12px] text-blue font-poppins text-[14px] font-normal leading-[157%] outline-none focus:border-[#8CBC3F] placeholder:text-[#45647BCC] placeholder:font-poppins placeholder:text-[14px] placeholder:leading-[157%]"></input>
                                        </div>
                                        <div className='mb-[20px]'>
                                            <label htmlFor="phone" className="block mb-[10px] text-blue font-poppins text-[14px] font-semibold leading-normal capitalize">Phone Number*</label>
                                            <PhoneInput
                                                country={'us'}
                                                value={phone}
                                                onChange={phone => setPhone(phone)}
                                                inputClass="w-full rounded-[7px] border border-solid border-[#E5E5E5] bg-white max-md:py-[10px] py-[14px] px-[12px] text-blue font-poppins text-[14px] font-normal leading-[157%] outline-none focus:border-[#8CBC3F]"
                                                containerClass="w-full"
                                                buttonClass="phone-input-flag"
                                            />
                                        </div>
                                        <div>
                                            <label for="message" class="block mb-[10px] text-blue font-poppins text-[14px] font-semibold leading-normal capitalize">Message</label>
                                            <textarea id="message" name="message" placeholder='Tell us more' class="w-full rounded-[7px] border border-solid border-[#E5E5E5] bg-white pt-[14px] pb-[57px] px-[12px] text-blue font-poppins text-[14px] font-normal leading-[157%] outline-none focus:border-[#8CBC3F] placeholder:text-[#45647BCC] placeholder:font-poppins placeholder:text-[14px] placeholder:leading-[157%]"></textarea>
                                        </div>
                                        <div className='mt-[23px]'>
                                            <button type='submit' className='inline-flex justify-center items-center max-lg:py-[10px] lg:py-[14px] max-lg:px-[24px] lg:px-[32px] rounded-[50px] bg-green border-solid border-2 border-green text-white font-poppins text-[14px] font-semibold leading-[142%] uppercase hover:bg-[#173D5A] transition-all duration-[0.4s] hover:border-[#173D5A]'>Send message <img src={arrow} alt="arrow" className='ml-[10px]'/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reachoutmodal;
