import React from 'react'

const Benefits = ({ benefitstitle, benefitsData }) => {
    return (
        <>
            <div className='max-md:pt-[30px] md:pt-[40px] lg:pt-[50px] xl:pt-[70px] xxl:pt-[100px] max-md:pb-[15px] md:pb-[25px] lg:pb-[25px] xl:pb-[35px] xxl:pb-[50px]'>
                <div className='container'>
                    <div>
                        <div>
                            <h2 className='font-poppins text-blue text-center max-md:text-[28px] md:text-[36px] font-semibold leading-[138%] capitalize'>{benefitstitle}</h2>
                        </div>
                        <div className='max-md:mt-[25px] md:mt-[30px] lg:mt-[30px] xl:mt-[40px]'>
                            <div className='grid grid-cols-12 gap-x-[20px] max-sm:gap-y-[20px] gap-y-[30px]'>
                                {benefitsData.map((benefit, index) => (
                                    <div key={index} className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4'>
                                        <div className='rounded-[16px] bg-[#F2F5F8] max-md:p-[20px] md:p-[20px] lg:p-[25px] xl:p-[40px] h-full'>
                                            <div className='max-md:w-[45px] max-md:h-[45px] md:w-[60px] md:h-[60px] max-md:p-[12px] md:p-[15px] flex justify-center items-center rounded-[50px] bg-[#D2DC28]'>
                                                <img src={benefit.icon} alt="icon" />
                                            </div>
                                            <span className='block mt-[16px] text-[#003E5B] font-poppins max-md:text-[17px] md:text-[20px] font-semibold leading-[160%]'>{benefit.title}</span>
                                            <div className='mt-[6px]'>
                                                <p className='font-poppins text-[#45647B] max-md:text-[15px] md:text-[16px] font-normal leading-[162%]'>{benefit.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefits;

