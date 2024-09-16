import logo from "../images/logo.svg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Requestmodal from "./Requestmodal";

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        if (isCollapsed) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isCollapsed]);

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

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        
        const isMobile = window.innerWidth < 576;
        const headerHeight = isMobile 
            ? document.querySelector('header')?.offsetHeight || 75 
            : document.querySelector('header')?.offsetHeight || 86;
    
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
            setIsCollapsed(false);
        }
    };
    

    return (
        <>
            <section className="fixed top-0 left-0 right-0 w-full bg-white z-50 bg-transparent py-[20px]">
                <div className="container">
                    <div className="flex justify-between items-center w-full">
                        <div className="w-full max-sm:max-w-[120px] max-w-[165px] relative z-[100]">
                            <Link to="/" className="inline-block">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="object-cover"
                                />
                            </Link>
                        </div>
                        {/* big screen links */}
                        <div className={`hidden lg:block`}>
                            <ul className="flex flex-row items-center gap-6 xl:gap-[60px] s14:gap-[47px] xl:mt-0">
                                <li className="relative group">
                                    {/* Native scrolling using hash links */}
                                    <Link
                                        className="text-[#45647B] uppercase font-poppins text-[14px] leading-[20px] font-medium hover:font-semibold hover:text-[#173D5A]"
                                        onClick={() => scrollToSection('about')}
                                    >
                                        About
                                        <span className="absolute left-0 right-0 bottom-0 w-0 mx-auto h-[2px] bg-[#97BB45] transition-all duration-500 ease-in-out transform origin-center group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link
                                        className="text-[#45647B] uppercase font-poppins text-[14px] leading-[20px] font-medium hover:font-semibold hover:text-[#173D5A]"
                                        onClick={() => scrollToSection('sonnet')}
                                    >
                                        Sonnet
                                        <span className="absolute left-0 right-0 bottom-0 w-0 mx-auto h-[2px] bg-[#97BB45] transition-all duration-500 ease-in-out transform origin-center group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link
                                        className="text-[#45647B] uppercase font-poppins text-[14px] leading-[20px] font-medium hover:font-semibold hover:text-[#173D5A]"
                                        onClick={() => scrollToSection('results')}
                                    >
                                        Results
                                        <span className="absolute left-0 right-0 bottom-0 w-0 mx-auto h-[2px] bg-[#97BB45] transition-all duration-500 ease-in-out transform origin-center group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link
                                        className="text-[#45647B] uppercase font-poppins text-[14px] leading-[20px] font-medium hover:font-semibold hover:text-[#173D5A]"
                                        onClick={() => scrollToSection('contact')}
                                    >
                                        Contact
                                        <span className="absolute left-0 right-0 bottom-0 w-0 mx-auto h-[2px] bg-[#97BB45] transition-all duration-500 ease-in-out transform origin-center group-hover:w-full"></span>
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <button
                                        onClick={() => openModal('request')}
                                        className="bg-[#97BB45] font-poppins uppercase border-solid border-2 border-[#97BB45] text-[#FFF] text-[14px] leading-[20px] font-semibold rounded-[50px] py-[8px] px-[24px] xl:flex justify-center items-center hover:bg-[#FFF] hover:border-[#97BB45] hover:text-[#97BB45]"
                                    >
                                        Request a Demo
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {/* toggle button */}
                        <button
                            className="rounded hover:opacity-75 relative z-50 lg:hidden"
                            id="navbar-toggle"
                            onClick={toggleCollapse}
                        >
                            <span
                                className={`${isCollapsed
                                    ? "rotate-45 top-[2px] duration-500"
                                    : "duration-500"
                                    } relative w-[28px] h-[2px] rounded-md bg-green block mb-1`}
                            ></span>
                            <span
                                className={`${isCollapsed ? "hidden" : "duration-500"
                                    } relative w-[28px] h-[2px] rounded-md bg-green block mb-1`}
                            ></span>
                            <span
                                className={`${isCollapsed
                                    ? "-rotate-45 -top-1 duration-500"
                                    : "duration-500"
                                    } relative w-[28px] h-[2px] rounded-md bg-green block`}
                            ></span>
                        </button>
                    </div>
                    {/* small screen menubar */}
                    <div className={`${isCollapsed ? "block" : "lg:hidden"}`}>
                        <div
                            className={`${isCollapsed
                                ? "top-0 right-0 h-full transition-all duration-500"
                                : "top-0 right-[-100%] transition-all duration-500"
                                } fixed top-0 overflow-auto bg-white h-full w-full lg:hidden`}
                        >
                            <div className="h-full w-full flex justify-center">
                                <ul className="flex flex-col items-center justify-center gap-5 overflow-auto">
                                    <li className="relative group">
                                        {/* Use scrollToSecLinkor smooth scroll */}
                                        <Link
                                            className="text-[#45647B] uppercase font-poppins text-[14px] leading-[20px] font-medium hover:font-semibold hover:text-[#173D5A]"
                                            onClick={() => scrollToSection('about')}
                                        >
                                            About
                                            <span className="absolute left-0 right-0 bottom-0 w-0 mx-auto h-[2px] bg-[#97BB45] transition-all duration-500 ease-in-out transform origin-center group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                    <li className="relative group">
                                        <Link
                                            className="text-[#45647B] uppercase font-poppins text-[14px] leading-[20px] font-medium hover:font-semibold hover:text-[#173D5A]"
                                            onClick={() => scrollToSection('sonnet')}
                                        >
                                            Sonnet
                                            <span className="absolute left-0 right-0 bottom-0 w-0 mx-auto h-[2px] bg-[#97BB45] transition-all duration-500 ease-in-out transform origin-center group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                    <li className="relative group">
                                        <Link
                                            className="text-[#45647B] uppercase font-poppins text-[14px] leading-[20px] font-medium hover:font-semibold hover:text-[#173D5A]"
                                            onClick={() => scrollToSection('results')}
                                        >
                                            Results
                                            <span className="absolute left-0 right-0 bottom-0 w-0 mx-auto h-[2px] bg-[#97BB45] transition-all duration-500 ease-in-out transform origin-center group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                    <li className="relative group">
                                        <Link
                                            className="text-[#45647B] uppercase font-poppins text-[14px] leading-[20px] font-medium hover:font-semibold hover:text-[#173D5A]"
                                            onClick={() => scrollToSection('contact')}
                                        >
                                            Contact
                                            <span className="absolute left-0 right-0 bottom-0 w-0 mx-auto h-[2px] bg-[#97BB45] transition-all duration-500 ease-in-out transform origin-center group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={() => openModal('request')}
                                            className="bg-[#97BB45] font-poppins uppercase border-solid border-2 border-[#97BB45] text-[#FFF] text-[14px] leading-[20px] font-semibold rounded-[50px] py-[8px] px-[24px] xl:flex justify-center items-center hover:bg-[#FFF] hover:border-[#97BB45] hover:text-[#97BB45]"
                                        >
                                            Request a Demo
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {isModalOpen && activeModal === 'request' && (
                <Requestmodal isOpen={isModalOpen} onClose={closeModal} />
            )}
        </>
    );
};

export default Header;

