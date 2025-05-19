import React from 'react';
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import Intersect from "@/assets/resources/Intersect.svg"
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import Select from "@/Components/Select";

const Footer = () => {
    return (
        <footer className='w-full max-w-[1920px] mx-auto bg-gray-500'>

            <div
                className='h-[756px] bg-no-repeat bg-cover bg-center flex justify-center items-center'
                style={{ backgroundImage: `url(${Intersect.src})` }}
            >
                <div className='max-w-[1350px] 2xl:px-[80px] px-[20px] w-full'>
                    <p className='text-primary-white text-center font-semibold 2xl:text-[50px] sm:text-[32px] text-[24px] 2xl:leading-[52px] sm:leading-[30px] leading-[24px]'>Остались вопросы? Оставьте заявку <br/> и получите консультацию</p>
                    <p className='2xl:text-[24px] text-[16px] text-center 2xl:mt-6 mt-4 2xl:leading-[36px] leading-[16px] text-primary-white'>Специалист отдела инвестиций свяжется с вами <br className='2xl:block hidden'/> и ответит на все вопросы.</p>

                    <div className='grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-[60px]'>
                        <Input placeholder='Имя'/>
                        <Input placeholder='Email'/>
                        <Input placeholder='Телефон'/>
                        <Button title='Отправить'/>
                    </div>
                    <div className='flex justify-center 2xl:mt-[124px] sm:mt-[60px] mt-[20px]'>
                        <Select/>
                    </div>


                </div>
            </div>

            <div className='min-h-[64px] 2xl:px-[80px] px-[30px] mt-5 flex lg:flex-row flex-col md:gap-0 gap-2 items-center justify-between '>
                <Image src={Logo} alt='logo'/>

                <div className='flex sm:gap-6 gap-0 sm:flex-row flex-col'>
                    <span className='text-gray-700 cursor-pointer hover:text-primary-blue font-medium text-[12px] leading-[18px]'>Политика конфиденциальности</span>
                    <span className='text-gray-700 cursor-pointer hover:text-primary-blue font-medium text-[12px] leading-[18px]'>Согласие на обработку данных</span>
                </div>

                <div className='flex gap-4'>
                    <span className='text-gray-700 font-medium text-[12px] leading-[18px]'>©2025  inwis</span>
                    <span className='text-gray-700 font-medium text-[12px] leading-[18px]'>Сделано в dewis</span>

                </div>

            </div>


        </footer>
    );
};

export default Footer;