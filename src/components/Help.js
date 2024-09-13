import React, { useState } from 'react'
import Reachoutmodal from './Reachoutmodal';
import Requestmodal from './Requestmodal';

const Help = ({ helpsmalltitle, helptitle, helpinfo, arrow, btn1, btn2 }) => {

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
            <div className='max-md:py-[35px] md:py-[60px] lg:py-[75px] xl:py-[93px] bg-blue-gradient'>
                <div className='container'>
                    <div className='max-sm:text-center'>
                        <span className='block font-poppins text-center text-[#D2DC28] text-[16px] font-semibold leading-normal uppercase'>{helpsmalltitle}</span>
                        <div className='mt-[14px] w-full max-w-[581px] mx-auto text-center'>
                            <h2 className='text-center text-white font-poppins max-sm:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-semibold leading-[138%] capitalize'>{helptitle}</h2>
                        </div>
                        <div className='mt-[20px]'>
                            <p className='text-center text-lightwhite font-poppins max-md:text-[15px] md:text-[18px] font-normal leading-[144%]'>{helpinfo}</p>
                        </div>
                        <div className='mt-[22px] md:mt-[30px] lg:mt-[40px] inline-flex sm:flex justify-center flex-col sm:flex-row'>
                            <button onClick={() => openModal('reachout')} className='inline-flex justify-center items-center py-[10px] px-[24px] md:py-[10px] lg:py-[15px] md:px-[24px] lg:px-[34px] rounded-[50px] border-solid border border-lightwhite text-white font-poppins text-[14px] font-semibold leading-[20px] uppercase hover:bg-green hover:border-green transition-all duration-[0.4s]'>{btn1} <img src={arrow} alt="arrow" className='ml-[10px]' /></button>
                            <button onClick={() => openModal('request')} className='sm:ml-[14px] mt-[10px] sm:mt-[0px] inline-flex justify-center items-center py-[10px] px-[24px] md:py-[10px] lg:py-[15px] md:px-[24px] lg:px-[34px] rounded-[50px] border-solid border border-green bg-green text-white font-poppins text-[14px] font-semibold leading-[20px] uppercase hover:bg-transparent transition-all duration-[0.4s] hover:border-white'>{btn2} <img src={arrow} alt="arrow" className='ml-[10px]' /></button>
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
    )
}

export default Help
