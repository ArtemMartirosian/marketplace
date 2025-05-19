import React from 'react';

const About = () => {
    return (
        <div className='w-full  bg-[#F3F4F8] flex justify-between pb-[115px]'>
            <div className='max-w-[1920px] w-full mx-auto'>
                <div className='max-w-[1480px] mx-auto w-full 2xl:px-[80px] px-[30px] flex flex-col gap-8  2xl:mt-[120px] sm:mt-[80px] mt-[40px] w-full'>
                    <h4 className='text-blue-500 font-semibold 2xl:text-[60px] sm:text-[32px] text-[24px] 2xl:leading-[72px] sm:leading-[30px] leading-[24px]'>
                        Инновационный подход <br/> к финансированию проектов
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default About;