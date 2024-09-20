import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Requestmodal from './Requestmodal'
import Reachoutmodal from './Reachoutmodal';

const Footer = ({ logo, info, menu1, menu2, menu3, menu4, mail, requestbtn, linkedinicon }) => {

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
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <div className='max-md:pt-[30px] md:pt-[35px] lg:pt-[45px] xl:pt-[50px] max-md:pb-[20px] md:pb-[20px] lg:pb-[20px] xl:pb-[20px]'>
                <div className='container'>
                    <div>
                        <div className='flex max-md:flex-col justify-between items-center'>
                            <div>
                                <div className='inline-block lg:max-w-[164px] max-md:flex max-md:justify-center cursor-pointer'>
                                    <img src={logo} alt="logo" onClick={scrollToTop} />
                                </div>
                                <div className='mt-[20px] w-full max-md:text-center max-md:mx-auto max-w-[260px]'>
                                    <p className='font-poppins text-[#45647B] text-[16px] font-normal leading-[162%]'>{info}</p>
                                </div>
                            </div>
                            <div className='max-md:mt-[30px] md:ml-[-50px] lg:ml-[-50px] xl:ml-[-87px]'>
                                <ul className='flex max-lg:flex-col max-lg:items-center'>
                                <li className='inline-flex max-lg:mb-[20px] lg:mr-[40px] max-lg:mr-[0px] xl:mr-[70px] font-poppins text-[#45647B] hover:text-green text-[14px] font-medium leading-[142%] uppercase transition-all duration-[0.4s]'>
                                        <ScrollLink to="about" offset={-75} spy={true} activeClass="active" className='cursor-pointer'>
                                            {menu1}
                                        </ScrollLink>
                                    </li>
                                    <li className='inline-flex max-lg:mb-[20px] lg:mr-[40px] max-lg:mr-[0px] xl:mr-[70px] font-poppins text-[#45647B] hover:text-green text-[14px] font-medium leading-[142%] uppercase transition-all duration-[0.4s]'>
                                        <ScrollLink to="sonnet" offset={-75} spy={true} activeClass="active" className='cursor-pointer'>
                                            {menu2}
                                        </ScrollLink>
                                    </li>
                                    <li className='inline-flex max-lg:mb-[20px] lg:mr-[40px] max-lg:mr-[0px] xl:mr-[70px] font-poppins text-[#45647B] hover:text-green text-[14px] font-medium leading-[142%] uppercase transition-all duration-[0.4s]'>
                                        <ScrollLink to="results" offset={-75} spy={true} activeClass="active" className='cursor-pointer'>
                                            {menu3}
                                        </ScrollLink>
                                    </li>
                                    <li className='inline-flex font-poppins text-[#45647B] hover:text-green text-[14px] font-medium leading-[142%] uppercase transition-all duration-[0.4s]'>
                                        <ScrollLink to="" offset={-75} spy={true} activeClass="active" className='cursor-pointer' onClick={() => openModal("reachout")}>
                                            {menu4}
                                        </ScrollLink>
                                    </li>
                                </ul>
                            </div>
                            <div className='max-md:mt-[25px] md:mt-[17px]'>
                                <div className='max-md:text-center'>
                                    <Link to="mailto:sales@palinode.io" className='text-blue hover:text-green font-poppins text-[16px] font-semibold leading-[140%] transition-all duration-[0.4s]'>{mail}</Link>
                                </div>
                                <div className='mt-[20px]'>
                                    <button onClick={() => openModal('request')} className='inline-flex justify-center items-center max-lg:py-[10px] lg:py-[10px] max-lg:px-[24px] lg:px-[26px] rounded-[40px] bg-green border-solid border-2 border-green text-white font-poppins text-[14px] font-semibold leading-[142%] uppercase hover:bg-[#173D5A] transition-all duration-[0.4s] hover:border-[#173D5A]'>{requestbtn}</button>
                                </div>
                                <div className='mt-[20px]'>
                                    <ul className='flex max-md:justify-center'>
                                        <li><Link to="/" target="_blank" rel="noopener noreferrer" className='max-lg:w-[40px] max-lg:h-[40px] w-[50px] h-[50px] inline-flex justify-center items-center border border-solid border-[#E5EBF0] rounded-[50%] text-[#004664] max-lg:text-[16px] text-[20px] hover:bg-green hover:border-green transition-all duration-[0.4s]'><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[20px] text-center'>
                            <p className='text-center font-poppins text-[#45647B] text-[13px] font-normal leading-[140%]'>Copyright © 2024 Palinode. All Rights Reserved. - <Link to="/" className='underline hover:text-green transition-all duration-[0.4s]'>Privacy Policy</Link> - <Link to="/" className='underline hover:text-green transition-all duration-[0.4s]'>Report a Concern</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && activeModal === 'request' && (
                <Requestmodal isOpen={isModalOpen} onClose={closeModal} />
            )}
            {isModalOpen && activeModal === 'reachout' && (
                <Reachoutmodal isOpen={isModalOpen} onClose={closeModal} />
            )}

        </>
    )
}

export default Footer


