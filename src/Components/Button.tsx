import React from 'react';

type ButtonProps = {
    title: string;
};

const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <button className='w-full font-semibold text-[14px] leading-[14px] px-[28px] py-[18px] bg-primary-white text-primary-blue rounded-[4px]'>
            {title}
        </button>
    );
};

export default Button;