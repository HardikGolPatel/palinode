import React, { useState } from 'react';
import Reachoutmodal from './Reachoutmodal';
import Requestmodal from './Requestmodal';

const Banner = ({ bannersmalltitle, bannerimg, bannermainheading, bannerparagraph, btn1, btn2, arrow }) => {
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
            <div className='relative max-sm:mt-[75px] mt-[86px]'>
                <div className='md:w-full h-[400px] sm:h-[400px] md:h-full'>
                    <img src={bannerimg} alt="banner" className="object-cover w-full max-w-[100%] h-full" />
                </div>
                <div className='absolute w-full left-0 right-0 top-[50%] translate-y-[-50%]'>
                    <div className='container'>
                        <div>
                            <div>
                                <span className='font-poppins text-[#D2DC28] text-[16px] font-semibold uppercase leading-normal'>{bannersmalltitle}</span>
                            </div>
                            <div className='w-[100%] max-w-[330px] md:max-w-[400px] lg:max-w-[545px] xl:max-w-[685px] mt-[14px]'>
                                <h1 className='text-white font-poppins text-[22px] sm:text-[26px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-semibold leading-[128%] capitalize'>{bannermainheading}</h1>
                            </div>
                            <div className='mt-[20px] max-sm:max-w-[250px] max-md:max-w-[330px]'>
                                <p className='text-[#C2CEDB] font-work-sans lg:text-[18px] font-normal leading-[166%] capitalize'>{bannerparagraph}</p>
                            </div>
                            <div className='mt-[22px] md:mt-[30px] lg:mt-[40px] inline-flex sm:flex flex-col sm:flex-row'>
                                {/* Button 1 opens Reachoutmodal */}
                                <button onClick={() => openModal('reachout')} className='inline-flex justify-center items-center py-[10px] px-[24px] md:py-[10px] lg:py-[15px] md:px-[24px] lg:px-[34px] rounded-[50px] border-solid border border-lightwhite text-white font-poppins text-[14px] font-semibold leading-[20px] uppercase hover:bg-green hover:border-green transition-all duration-[0.4s]'>
                                    {btn1} <img src={arrow} alt="arrow" className='ml-[10px]' />
                                </button>
                                {/* Button 2 opens Requestmodal */}
                                <button onClick={() => openModal('request')} className='sm:ml-[14px] mt-[10px] sm:mt-[0px] inline-flex justify-center items-center py-[10px] px-[24px] md:py-[10px] lg:py-[15px] md:px-[24px] lg:px-[34px] rounded-[50px] border-solid border border-green bg-green text-white font-poppins text-[14px] font-semibold leading-[20px] uppercase hover:bg-transparent transition-all duration-[0.4s] hover:border-white'>
                                    {btn2} <img src={arrow} alt="arrow" className='ml-[10px]' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Conditionally render Reachoutmodal or Requestmodal */}
            {isModalOpen && activeModal === 'reachout' && (
                <Reachoutmodal isOpen={isModalOpen} onClose={closeModal} />
            )}
            
            {isModalOpen && activeModal === 'request' && (
                <Requestmodal isOpen={isModalOpen} onClose={closeModal} />
            )}
        </>
    );
};

export default Banner;



