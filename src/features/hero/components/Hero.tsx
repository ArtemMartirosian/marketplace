import React from 'react';
import HeroBg from '@/assets/resources/hero/HeroBg.png'
import Image from "next/image";
import SeeMoreButton from "@/Components/SeeMoreButton";

const Hero = () => {
    return (
        <div className='w-full  bg-white-500 flex justify-between pb-[115px]'>
            <div className='max-w-[1920px] h-[100vw] max-h-[1800px] w-full mx-auto relative '>
               <Image
                   src={HeroBg}
                   alt='hero img'
                   className='absolute object-center h-full top-0 right-0 z-1 '
               />

                <div className='absolute left-1/2 transform -translate-x-1/2  max-w-[1078px] w-full z-10'>
                    <div className='max-w-[1300px] mx-auto text-center w-full'>
                        <h1 className='w-full font-semibold mt-[150px] text-center w-full px-20 text-[60px] leading-[72px]  text-blue-500'>
                            Соединяем инвесторов, брокеров и бизнесы. Cоздаем прозрачность инвестиций
                        </h1>
                        <p className='text-[24px] max-w-[750px] px-10 mt-5 mx-auto leading-[36px] text-black-500'>Информационный сервис для инвесторов, работающих с различными инвест. сообществами и брокерами</p>

                        <div className='w-[270px] mt-[42px] mx-auto'>
                            <SeeMoreButton title='начать инвестировать' variant='primary'/>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;