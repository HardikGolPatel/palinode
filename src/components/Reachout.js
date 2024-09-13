import React, { useState } from 'react'
import Reachoutmodal from './Reachoutmodal';

const Reachout = ({ reachoutimg, reachoutsmalltitle, reachoutmaintitle, reachoutparagraph, reachoutbtn, arrow }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState('');

    const openModal = (modalType) => {
        setActiveModal(modalType);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveModal('');
    };

    return (
        <>
            <div className='max-md:pt-[10px] md:pt-[20px] lg:pt-[35px] xl:pt-[50px] max-md:pb-[30px] md:pb-[70px] lg:pb-[100px] xl:pb-[135px]'>
                <div className='container'>
                    <div className='flex items-center max-lg:flex-col lg:flex-row lg:gap-[60px] xl:gap-[80px] xxl:gap-[120px]'>
                        <div className='w-full max-lg:max-w-[100%] lg:max-w-[520px] max-md:h-[300px] md:h-[400px] lg:h-[100%]'>
                            <img src={reachoutimg} alt="img" className='object-cover w-full max-w-[100%] h-full' />
                        </div>
                        <div className='w-full max-md:mt-[20px] max-lg:mt-[30px] lg:mt-[0px] md:max-w-[100%] lg:max-w-[500px]'>
                            <span className='block max-lg:text-center lg:text-left text-[#87A83B] font-poppins text-[16px] font-semibold leading-normal uppercase'>{reachoutsmalltitle}</span>
                            <div className='mt-[14px]'>
                                <h3 className='text-[#173D5A] max-lg:text-center lg:text-left font-poppins max-md:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[26px] font-semibold leading-[138%] capitalize'>{reachoutmaintitle}</h3>
                            </div>
                            <div className='mt-[20px]'>
                                <p className='text-[#45647B] max-lg:text-center lg:text-left font-poppins max-md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal leading-[152%]'>{reachoutparagraph}</p>
                            </div>
                            <div className='flex max-lg:justify-center lg:justify-start max-lg:mt-[20px] lg:mt-[30px] xl:mt-[40px]'>
                                <button onClick={() => openModal('reachout')} className='inline-flex justify-center items-center max-lg:py-[10px] lg:py-[14px] max-lg:px-[24px] lg:px-[32px] rounded-[40px] bg-green border-solid border-2 border-green text-white font-poppins text-[14px] font-semibold leading-[142%] uppercase hover:bg-[#173D5A] transition-all duration-[0.4s] hover:border-[#173D5A]'>{reachoutbtn} <img src={arrow} alt={arrow} className='ml-[10px]' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && activeModal === 'reachout' && (
                <Reachoutmodal isOpen={isModalOpen} onClose={closeModal} />
            )}

        </>
    )
}

export default Reachout
