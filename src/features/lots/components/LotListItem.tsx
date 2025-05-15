import React from 'react';
import SeeMoreButton from "@/Components/SeeMoreButton";
import LotImg from '@/assets/resources/lots/LotImg.svg'
import Image from "next/image";

const LotListItem = () => {
    return (
        <div className='w-full flex flex-col gap-11 bg-white-500 rounded-[8px] p-5'>

            <div>
                <div className='flex justify-center items-center w-20 h-20 rounded-[4px] border-[1px] border-white-700'>
                    <Image src={LotImg} alt='lot'/>
                </div>
            </div>

            <div className='flex flex-col'>
                <p className='text-gray-800 font-medium text-[15px] leading-[18px]'>ООО Россельзохмашторг</p>
                <p className='text-blue-500 mt-1 font-bold text-[20px] leading-[28px]'>Заем под залог права требования</p>
                <p className='text-[15px] text-blue-500 leading-[22px] mt-4'>Производство и продажа машин для селькохозяйственной деятельности. Производство и продажа машин для селькохозяйственной.</p>
            </div>

            <div>
                <div className='flex justify-between'>
                    <p className='font-medium text-blue-600 text-[15px] leading-[24px]'>1 399 499 ₽</p>
                    <p className='font-medium text-gray-800 text-[15px] leading-[24px]'>из 5 700 000 ₽</p>
                </div>

                <div className='h-6 mt-2 rounded-[4px] bg-white-700 relative overflow-hidden'>
                    <div className='h-full ' style={{ width: '30%', backgroundColor: '#2B54E2' }}></div>
                </div>

                <div className='flex justify-end'>
                    <span className='text-gray-800 text-end mt-2 border-[1px] border-white-700 px-[6px] rounded-[6px]'>до конца сбора 18 дней</span>
                </div>
            </div>

            <div className='flex flex-col gap-[14px]'>
                <div className='flex justify-between'>
                    <p className='text-gray-800 text-[15px] leading-[18px] font-medium'>даты сбора</p>
                    <p className='font-medium text-[15px] leading-[18px] text-blue-500'>17.03.2024 — 20.04.2024</p>
                </div>

                <div className='flex justify-between'>
                    <p className='text-gray-800 text-[15px] leading-[18px] font-medium'>минимальная сумма </p>
                    <p className='font-medium text-[15px] leading-[18px] text-blue-500'>120 000 ₽</p>
                </div>

                <div className='flex justify-between'>
                    <p className='text-gray-800 text-[15px] leading-[18px] font-medium'>срок заема</p>
                    <p className='font-medium text-[15px] leading-[18px] text-blue-500'>320 дней</p>
                </div>

                <div className='flex justify-between'>
                    <p className='text-gray-800 text-[15px] leading-[18px] font-medium'>фиксированная ставка</p>
                    <p className='font-medium text-[15px] leading-[18px] text-blue-500'>21 %</p>
                </div>

            </div>

            <SeeMoreButton title='подробнее' variant='secondary'/>
        </div>
    );
};

export default LotListItem;