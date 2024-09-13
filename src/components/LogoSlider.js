import React from 'react'
import Marquee from "react-fast-marquee";

const LogoSlider = ({ logosliderimg1, logosliderimg2, logosliderimg3, logosliderimg4, logosliderimg5, logosliderimg6, logosliderimg7, logosliderimg8, logosliderimg9, logosliderimg10, logosliderimg11, logosliderimg12, logosliderimg13, logosliderimg14, logosliderimg15, logosliderimg16, logosliderimg17, logoslidertitle }) => {
    return (
        <> 
            <div className='logo-slider-part max-sm:py-[30px] sm:py-[40px] md:py-[50px]'>
                <div className='container'>
                    <div>
                        <div>
                            <span className='block max-sm:mb-[25px] sm:mb-[40px] text-center text-[#173D5A] font-poppins text-[16px] font-medium leading-normal capitalize'>{logoslidertitle}</span>
                        </div>
                        <Marquee>
                            <img src={logosliderimg1} alt="logosliderimg" />
                            <img src={logosliderimg2} alt="logosliderimg" />
                            <img src={logosliderimg3} alt="logosliderimg" />
                            <img src={logosliderimg4} alt="logosliderimg" />
                            <img src={logosliderimg5} alt="logosliderimg" />
                            <img src={logosliderimg6} alt="logosliderimg" />
                            <img src={logosliderimg7} alt="logosliderimg" />
                            <img src={logosliderimg8} alt="logosliderimg" />
                            <img src={logosliderimg9} alt="logosliderimg" />
                            <img src={logosliderimg10} alt="logosliderimg" />
                            <img src={logosliderimg11} alt="logosliderimg" />
                            <img src={logosliderimg12} alt="logosliderimg" />
                            <img src={logosliderimg13} alt="logosliderimg" />
                            <img src={logosliderimg14} alt="logosliderimg" />
                            <img src={logosliderimg15} alt="logosliderimg" />
                            <img src={logosliderimg16} alt="logosliderimg" />
                            <img src={logosliderimg17} alt="logosliderimg" />
                            <img src={logosliderimg1} alt="logosliderimg" />
                            <img src={logosliderimg2} alt="logosliderimg" />
                            <img src={logosliderimg3} alt="logosliderimg" />
                            <img src={logosliderimg4} alt="logosliderimg" />
                            <img src={logosliderimg5} alt="logosliderimg" />
                            <img src={logosliderimg6} alt="logosliderimg" />
                            <img src={logosliderimg7} alt="logosliderimg" />
                            <img src={logosliderimg8} alt="logosliderimg" />
                            <img src={logosliderimg9} alt="logosliderimg" />
                            <img src={logosliderimg10} alt="logosliderimg" />
                            <img src={logosliderimg11} alt="logosliderimg" />
                            <img src={logosliderimg12} alt="logosliderimg" />
                            <img src={logosliderimg13} alt="logosliderimg" />
                            <img src={logosliderimg14} alt="logosliderimg" />
                            <img src={logosliderimg15} alt="logosliderimg" />
                            <img src={logosliderimg16} alt="logosliderimg" />
                            <img src={logosliderimg17} alt="logosliderimg" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoSlider
