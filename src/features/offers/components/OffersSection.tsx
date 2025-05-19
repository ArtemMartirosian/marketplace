import React from 'react';
import {OFFER_CONSTANT} from "@/features/offers/constants/offer.constants";
import Image from "next/image";

const OffersSection = () => {
    return (
        <div className='w-full  bg-[#F3F4F8] flex justify-between pb-[115px]'>
            <div className='max-w-[1920px] mx-auto'>
                <div className='max-w-[1480px] 2xl:px-[80px] px-[30px]  2xl:mt-[120px] sm:mt-[80px] mt-[40px] w-full'>
                    <h4 className='text-blue-500 font-semibold 2xl:text-[50px] sm:text-[32px] text-[24px] 2xl:leading-[52px] sm:leading-[30px] leading-[24px]'>Что мы предлагаем</h4>

                    <div className='2xl:mt-[60px] mt-[30px] grid lg:grid-cols-2 grid-cols-1 gap-5 '>

                        {
                            OFFER_CONSTANT.map((item) => {
                                return (
                                    <div key={item.id} className='bg-white-500 px-6 py-10'>

                                        <Image src={item.icon} alt='img'/>

                                        <p className='font-semibold mt-[60px] text-[28px] leading-[26px] text-black-500'>{item.title}</p>
                                        <p className='text-[16px] leading-[24px] mt-3'>{item.subTitle}</p>
                                    </div>
                                )
                            } )
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersSection;