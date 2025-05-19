import React from 'react';

const About = () => {
    return (
        <div className='w-full  bg-[#F3F4F8] flex justify-between pb-[115px]'>
            <div className='max-w-[1920px] w-full mx-auto'>
                <div className='max-w-[1480px] flex flex-col 2xl:gap-[60px] gap-[30px] mx-auto w-full 2xl:px-[80px] px-[30px] flex flex-col gap-8  2xl:mt-[120px] sm:mt-[80px] mt-[40px] w-full'>
                    <h4 className='text-blue-500 font-semibold 2xl:text-[60px] sm:text-[32px] text-[24px] 2xl:leading-[72px] sm:leading-[30px] leading-[24px]'>
                        Инновационный подход <br/> к финансированию проектов
                    </h4>

                    <div className='flex lg:flex-row flex-col gap-10'>

                       <div className='flex flex-col gap-10'>
                           <p className='text-[24px] leading-[36px] text-black-500'>
                               inwis — это современная инвестиционная платформа, ориентированная на привлечение частных и институциональных инвесторов для финансирования гостиничных и туристических проектов в России.
                           </p>
                           <p className='text-[24px] leading-[36px] text-black-500'>
                               Мы используем современные технологии и уникальные финансовые инструменты для создания надежной и эффективной платформы, соответствующей всем требованиям законодательства и ожиданиям наших клиентов.
                           </p>
                           <p className='text-[32px] font-semibold leading-[42px] text-black-500'>
                               «Наша команда состоит из опытных профессионалов в области финансов, технологий и юриспруденции, что гарантирует высокое качество предоставляемых услуг.»
                           </p>
                       </div>
                        <div className='max-w-[454px] w-full flex flex-col gap-5'>
                            <div className='max-w-[454px] w-full h-[510px] rounded-[4px] bg-gray-800'>

                            </div>
                            <i className='text-[24px] leading-[36px]'>
                                Полина Приходько, генеральный директор платформы inwis
                            </i>
                        </div>

                    </div>

                    <div>
                        <p className='font-semibold 2xl:mt-[40px] text-[40px] leading-[52px]'>Все наши продукты разработаны с учетом потребностей инвесторов и эмитентов, что обеспечивает баланс между риском и доходностью</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;