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

                        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 2xl:mt-[60px] mt-[30px]'>

                            <div className='flex flex-col gap-5'>
                                <div className='h-[319px] flex items-center justify-center rounded-[4px] bg-gray-800 text-black-500 text-[40px] leading-[36px]'>
                                    Займы
                                </div>
                                <p className='text-[24px] leading-[36px]'>Краткосрочные и долгосрочные займы для финансирования строительства и реконструкции гостиниц и туристических объектов.</p>

                            </div>

                            <div className='flex flex-col gap-5'>
                                <div className='h-[319px] flex items-center justify-center rounded-[4px] bg-gray-800 text-black-500 text-[40px] leading-[36px]'>
                                    Займы
                                </div>
                                <p className='text-[24px] leading-[36px]'>
                                    Выпуск облигаций для привлечения долгосрочного капитала с фиксированной процентной ставкой.
                                </p>

                            </div>

                            <div className='flex flex-col gap-5'>
                                <div className='h-[319px] flex items-center justify-center rounded-[4px] bg-gray-800 text-black-500 text-[40px] leading-[36px]'>
                                    Инвест.  договоры
                                </div>
                                <p className='text-[24px] leading-[36px]'>
                                    Долгосрочные контракты, предусматривающие участие инвесторов в доходах от эксплуатации объектов.
                                </p>

                            </div>

                        </div>
                    </div>

                    <div>
                        <p className='font-semibold 2xl:mt-[40px] text-[40px] leading-[52px]'>
                            Наша стратегия развития направлена на укрепление позиций на рынке и расширение продуктового портфеля
                        </p>

                        <div className='2xl:mt-[60px] mt-[30px] flex flex-col 2xl:gap-10 gap-6'>

                            <div className='flex md:flex-row flex-col 2xl:gap-10 gap-6'>
                                <div className='max-w-[181px] w-full h-[153px] rounded-[4px] bg-gray-800'></div>
                                <p className='text-[24px] leading-[36px]'>Географическая экспансия: Выход на международные рынки, начиная с СНГ и стран Восточной Европы.</p>
                            </div>

                            <div className='flex md:flex-row flex-col 2xl:gap-10 gap-6'>
                                <div className='max-w-[181px] w-full h-[153px] rounded-[4px] bg-gray-800'></div>
                                <p className='text-[24px] leading-[36px]'>Расширение продуктовой линейки: Введение новых финансовых инструментов, таких как деривативы и структурированные продукты.</p>
                            </div>

                            <div className='flex md:flex-row flex-col 2xl:gap-10 gap-6'>
                                <div className='max-w-[181px] w-full h-[153px] rounded-[4px] bg-gray-800'></div>
                                <p className='text-[24px] leading-[36px]'>Партнёрства: Сотрудничество с банками, страховыми компаниями и другими финансовыми институтами для увеличения клиентской базы.</p>
                            </div>

                        </div>

                    </div>

                    <div>
                        <p className='font-semibold 2xl:mt-[40px] text-[40px] leading-[52px]'>
                            История развития проекта inwis
                        </p>

                        <div className=' 2xl:grid 2xl:grid-cols-6 flex flex-wrap gap-5 2xl:mt-[60px] mt-[30px]'>

                            {
                                [1,2,3,4,5,6].map((val) => {
                                    return (
                                        <div key={val} className='flex w-[190px] flex-col 2xl:gap-10 gap-6 '>
                                            <div className='w-full h-[153px] bg-gray-800'></div>
                                            <div>
                                                <p className='font-medium text-[24px] leading-[36px]'>2021 год</p>
                                                <p className='text-[24px] leading-[36px]'>Основание компании</p>
                                            </div>
                                        </div>
                                    )
                                } )
                            }

                        </div>

                    </div>

                    <div>
                        <p className='font-semibold 2xl:mt-[40px] text-[40px] leading-[52px]'>
                            Команда inwis
                        </p>

                        <div className='grid 2xl:mt-[60px] mt-[30px] 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                            {
                                [1,2,3,4,5,6].map((val) => {
                                    return (
                                        <div key={val} className='flex flex-col gap-2'>
                                            <div className='h-[319px] bg-gray-800'></div>
                                            <p className='text-[24px] leading-[36px]'>Сотрудник, должность</p>

                                        </div>
                                    )
                                } )
                            }
                        </div>
                    </div>

                    <div>
                        <p className='font-semibold 2xl:mt-[40px] text-[40px] leading-[52px]'>
                            Кейсы и отзывы
                        </p>

                        <div className='2xl:mt-[60px] mt-[30px] flex flex-col 2xl:gap-10 gap-6'>
                            {
                                [1,2].map((val) => {
                                    return (
                                        <div key={val} className='grid md:grid-cols-2 grid-cols-1 2xl:gap-[60px] gap-[30px] '>
                                            <div className='flex flex-col 2xl:gap-[40px] gap-[20px]'>
                                                <p className='text-[36px] leading-[42px]'>Как стюардесса из Петербурга стала инвестиционным советником</p>
                                                <p className='text-[24px] leading-[36px]'>В этом выпуске мы поговорили с Екатериной Прошенковой, в прошлом стюардессой, а теперь инвестиционным советником.</p>
                                            </div>
                                            <div className='h-[319px] bg-gray-800'></div>
                                        </div>
                                    )
                                } )
                            }
                        </div>

                    </div>


                    </div>
            </div>
        </div>
    );
};

export default About;