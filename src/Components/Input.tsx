import React from 'react';

type InputProps = {
    placeholder: string;
};

const Input: React.FC<InputProps> = ({ placeholder }) => {
    return (
        <div className='w-full border-[1px] border-primary-white px-3 py-4 rounded-[4px]'>
            <input
                className="bg-transparent w-full h-ful border-none outline-none text-white placeholder-white"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;