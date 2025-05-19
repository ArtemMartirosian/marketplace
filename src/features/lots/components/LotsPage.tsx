"use client"
import React, {useState} from 'react';
import LotListItem from "@/features/lots/components/LotListItem";
import SeeMoreButton from "@/Components/SeeMoreButton";

const LotsPage = () => {

    const [selectType, setSelectType] = useState<number>(1)

    return (
        <div className='w-full  bg-[#F3F4F8] flex justify-between pb-[115px]'>
            <div className='max-w-[1920px] w-full mx-auto'>
                <div className='max-w-[1480px] mx-auto w-full md:px-[80px] px-[20px] flex flex-col gap-8  2xl:mt-[120px] sm:mt-[80px] mt-[40px] w-full'>
                    <h4 className='text-blue-500 font-semibold 2xl:text-[50px] sm:text-[32px] text-[24px] 2xl:leading-[52px] sm:leading-[30px] leading-[24px]'>
                        Лоты
                    </h4>

                    <div className='flex mt-6 gap-6'>
                        <span onClick={() => setSelectType(1)} className={selectType === 1 ? "text-blue-700 font-medium text-[18px] border-b-blue-700 border-b-[2px] cursor-pointer" : "text-gray-800 cursor-pointer font-medium text-[18px]" }>в процессе сбора</span>
                        <span onClick={() => setSelectType(2)} className={selectType === 2 ? "text-blue-700 font-medium text-[18px] border-b-blue-700 border-b-[2px] cursor-pointer" : "text-gray-800 cursor-pointer font-medium text-[18px]" }>взавершенные</span>
                    </div>

                    <div className='grid grid-cols-3 gap-6'>
                        {
                            [1,2,3,4,5,6].map((item) => {
                                return <LotListItem key={item}/>
                            } )
                        }
                    </div>

                    <SeeMoreButton title='посмотреть еще' variant='primary'/>

                </div>
            </div>
        </div>
    );
};

export default LotsPage;