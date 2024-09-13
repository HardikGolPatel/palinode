import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Customersreview = ({ items, customersreviewsmalltitle, customerstitle }) => {
    return (
        <>
            <div className='max-md:pt-[30px] md:pt-[30px] lg:pt-[40px] xl:pt-[57px] max-md:pb-[30px] md:pb-[50px] lg:pb-[70px] xl:pb-[100px] bg-custom-gradient'>
                <div className='container'>
                    <div>
                        <span className='block text-center text-[#87A83B] font-poppins text-[16px] font-semibold leading-normal uppercase'>{customersreviewsmalltitle}</span>
                        <div className='mt-[14px] max-md:mb-[25px] md:mb-[40px]'>
                            <h2 className='font-poppins text-blue text-center max-md:text-[24px] md:text-[36px] font-semibold leading-[138%] capitalize'>{customerstitle}</h2>
                        </div>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 320: 1, 575: 2, 991: 3 }}
                        >
                            <Masonry gutter="24px">
                                {items.map((item, index) => (
                                    <div key={index} className="max-md:py-[25px] md:py-[30px] lg:py-[30px] xl:py-[40px] max-md:px-[20px] md:px-[20px] lg:px-[20px] xl:px-[30px] rounded-[16px] border border-solid border-[#E4E6EC] bg-white">
                                        <p className='text-blue mb-[18px] font-poppins max-md:text-[15px] md:text-[16px] font-normal leading-[162%]'>{item.info}</p>
                                        <img src={item.img} alt="customersimg" className='w-[30px] h-[30px] rounded-[30px]'/>
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customersreview
