import React from 'react';
import Logo from "@/assets/Logo.svg"
import ChatIcon from "@/assets/icons/ChatIcon.svg"
import Image from "next/image";
import {MENU_CONSTANT} from "@/features/header/constants/menu.constants";
import Link from "next/link";

const Header = () => {
    return (
        <header className='w-full text-black max-w-[1920px] mx-auto 2xl:px-[80px] px-[20px] h-[64px] flex items-center justify-between'>
            <div className='flex gap-[70px]'>
                <Link href='/'>
                    <Image src={Logo} alt='logo'/>
                </Link>
                <div className='flex gap-8'>
                    {
                        MENU_CONSTANT.map((item) => {
                            return (
                                <Link href={item.link} className='hover:text-primary-blue cursor-pointer' key={item.id}>{item.name}</Link>
                            )
                        } )
                    }
                </div>
            </div>

            <div className='flex gap-2'>
                <Image src={ChatIcon} alt='chat icon'/>
                <span className='text-primary-blue'>Связаться с нами</span>
            </div>
        </header>
    );
};

export default Header;