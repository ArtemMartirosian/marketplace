import React from 'react';
import SeeMoreButton from "@/Components/SeeMoreButton";
import LotListItem from "@/features/lots/components/LotListItem";
import Link from "next/link";

const LotsSection = () => {
    return (
        <div className='w-full  bg-[#F3F4F8] flex justify-between pb-[115px]'>
            <div className='max-w-[1920px] w-full mx-auto'>
                <div className='max-w-[1480px] mx-auto w-full 2xl:px-[80px] px-[30px] flex flex-col gap-8  2xl:mt-[120px] sm:mt-[80px] mt-[40px] w-full'>
                    <h4 className='text-blue-500 font-semibold 2xl:text-[50px] sm:text-[32px] text-[24px] 2xl:leading-[52px] sm:leading-[30px] leading-[24px]'>
                        Лоты
                    </h4>
                    <div className='grid 2xl:grid-cols-3  grid-cols-1 gap-6'>
                        {
                            [1,2,3].map((item) => {
                                return <LotListItem key={item}/>
                            } )
                        }
                    </div>

                    <Link href='/lots'>
                        <SeeMoreButton title='перейти ко всем лотам' variant='primary'/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LotsSection;