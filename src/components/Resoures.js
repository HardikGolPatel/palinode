import React from 'react'
import Marquee from 'react-fast-marquee'

const Resoures = ({ resoursestitle, logosliderblockimg1, logosliderblockimg2, logosliderblockimg3, logosliderblockimg4, logosliderblockimg5, logosliderblockimg6 }) => {
    return (
        <>
            <div className='logo-slider-block max-md:py-[20px] md:py-[25px] lg:py-[30px] xl:py-[50px]'>
                <div className='container'>
                    <div>
                        <span className='text-blue block mb-[30px] text-center font-poppins text-[18px] font-semibold leading-normal capitalize'>{resoursestitle}</span>
                        <Marquee>
                            <img src={logosliderblockimg1} alt="logosliderimg" />
                            <img src={logosliderblockimg2} alt="logosliderimg" />
                            <img src={logosliderblockimg3} alt="logosliderimg" />
                            <img src={logosliderblockimg4} alt="logosliderimg" />
                            <img src={logosliderblockimg5} alt="logosliderimg" />
                            <img src={logosliderblockimg6} alt="logosliderimg" />
                            <img src={logosliderblockimg1} alt="logosliderimg" />
                            <img src={logosliderblockimg2} alt="logosliderimg" />
                            <img src={logosliderblockimg3} alt="logosliderimg" />
                            <img src={logosliderblockimg4} alt="logosliderimg" />
                            <img src={logosliderblockimg5} alt="logosliderimg" />
                            <img src={logosliderblockimg6} alt="logosliderimg" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resoures
