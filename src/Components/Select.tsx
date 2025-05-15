import React from 'react';

const Select = () => {
    return (
        <select
            className="w-full  max-w-[480px] appearance-none h-[48px] outline-none border-none w-full p-3 rounded-[4px]"
            style={{
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E\")",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.25rem',
            }}
        >
            <option value="all">все сферы</option>
            <option value="it">ИТ</option>
            <option value="finance">Финансы</option>
            <option value="marketing">Маркетинг</option>
        </select>
    );
};

export default Select;
