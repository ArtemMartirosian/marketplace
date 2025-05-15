import React from 'react';

type SeeMoreButtonProps = {
    title: string;
    variant: 'primary' | 'secondary';
};

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ title, variant }) => {
    const baseClasses = 'w-full flex text-[20px] font-medium leading-[18px] items-center justify-center  rounded-[4px] border-[1px]';

    const variantClasses = variant === 'primary'
        ? 'text-primary-blue border-primary-blue h-[60px]'
        : 'text-gray-600 border-white-600 h-[42px]';

    return (
        <button className={`${baseClasses} ${variantClasses}`}>
            {title}
        </button>
    );
};

export default SeeMoreButton;
