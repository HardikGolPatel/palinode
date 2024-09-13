import React, { useState } from 'react'
import Requestmodal from './Requestmodal';

const Sonnet = ({ sonnetsmalltitle, sonnettitle, sonnetparagraph, icon1, icon2, icon3, listtitle1, listinfo1, listtitle2, listinfo2, listtitle3, listinfo3, requestbtn, arrow, sonnetimg }) => {

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
            <div className='max-md:py-[40px] md:py-[60px] lg:py-[80px] xl:py-[95px] bg-[#F4F7F9]'>
                <div className='container'>
                    <div className='flex max-lg:flex-col-reverse items-center lg:gap-[50px] xl:gap-[0px]'>
                        <div className='w-full xl:max-w-[620px] max-lg:mt-[30px]'>
                            <span className='block max-lg:text-center font-poppins text-[#87A83B] text-[16px] font-semibold leading-normal uppercase'>{sonnetsmalltitle}</span>
                            <div className='mt-[14px]'>
                                <h2 className='text-blue max-lg:text-center font-poppins max-md:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-semibold leading-[138%] capitalize'>{sonnettitle}</h2>
                            </div>
                            <div className='mt-[20px]'>
                                <p className='font-poppins max-lg:text-center text-blue max-md:text-[15px] xl:text-[18px] font-normal leading-[155%]'>{sonnetparagraph}</p>
                            </div>
                            <div className='max-md:mt-[20px] md:mt-[25px] lg:mt-[25px] xl:mt-[35px]'>
                                <div className='flex items-start mb-[26px]'>
                                    <img src={icon1} alt="icon" />
                                    <div className='ml-[20px]'>
                                        <span className='block font-poppins text-blue max-md:text-[16px] text-[18px] font-bold leading-[144%]'>{listtitle1}</span>
                                        <p className='mt-[4px] text-blue font-poppins max-md:text-[15px] text-[16px] font-normal leading-[162%]'>{listinfo1}</p>
                                    </div>
                                </div>
                                <div className='flex items-start mb-[26px]'>
                                    <img src={icon2} alt="icon" />
                                    <div className='ml-[20px]'>
                                        <span className='block font-poppins text-blue max-md:text-[16px] text-[18px] font-bold leading-[144%]'>{listtitle2}</span>
                                        <p className='mt-[4px] text-blue font-poppins max-md:text-[15px] text-[16px] font-normal leading-[162%]'>{listinfo2}</p>
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <img src={icon3} alt="icon" />
                                    <div className='ml-[20px]'>
                                        <span className='block font-poppins text-blue max-md:text-[16px] text-[18px] font-bold leading-[144%]'>{listtitle3}</span>
                                        <p className='mt-[4px] text-blue font-poppins max-md:text-[15px] text-[16px] font-normal leading-[162%]'>{listinfo3}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex max-lg:justify-center lg:justify-start max-lg:mt-[20px] lg:mt-[30px] xl:mt-[40px] lg:ml-[45px]'>
                                <button onClick={() => openModal('request')} className='inline-flex justify-center items-center max-lg:py-[10px] lg:py-[14px] max-lg:px-[24px] lg:px-[32px] rounded-[50px] bg-green border-solid border-2 border-green text-white font-poppins text-[14px] font-semibold leading-[142%] uppercase hover:bg-[#173D5A] transition-all duration-[0.4s] hover:border-[#173D5A]'>{requestbtn} <img src={arrow} alt={arrow} className='ml-[10px]' /></button>
                            </div>
                        </div>
                        <div className='w-full max-sm:h-[350px] max-lg:h-[500px] lg:h-full max-lg:max-w-[100%] lg:max-w-[476px] xl:ml-auto'>
                            <img src={sonnetimg} alt="img" className="object-cover w-full max-w-[100%] h-full" />
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && activeModal === 'request' && (
                <Requestmodal isOpen={isModalOpen} onClose={closeModal} />
            )}

        </>
    )
}

export default Sonnet
