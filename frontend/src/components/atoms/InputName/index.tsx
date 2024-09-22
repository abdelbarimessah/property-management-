'use client';
import Image from 'next/image';
import { useState } from 'react';
import { InputNameProps } from '@/types';
import { cn } from '@/lib/utils';

const InputName = (props: InputNameProps) => {
    const { name, src, alt, classname, usernameData } = props ?? {};

    const [showNameIcon, setShowNameIcon] = useState(false);
    const [nameValues, setNameValues] = useState('');

    return (
        <div
            className={cn(
                ` w-full bg-[#D2E6FF] relative rounded-[18px] hover:opacity-90 hover:cursor-text flex justify-start items-center gap-[18px] pl-[35px]`,
                classname
            )}
        >
            <input
                type="email"
                autoComplete="false"
                onChange={(event) => {
                    setNameValues(event.target.value);
                    if (usernameData) {
                        usernameData(event.target.value);
                    }
                }}
                value={nameValues}
                onClick={() => {
                    setShowNameIcon(true);
                }}
                onBlur={() => {
                    if (nameValues === '') {
                        setShowNameIcon(false);
                    }
                }}
                className="text-[#451A4A]/90 bg-transparent w-full h-full px-[35px] tracking-wider placeholder:text-color-0 placeholder:font-light font-poppins font-[400] rounded-[18px] text-[17px] focus:outline-none absolute top-0 left-0"
            />
            {!showNameIcon && (
                <>
                    <div className="relative h-[21px] w-[17px] object-cover">
                        <Image src={src} alt={alt} fill={true}></Image>
                    </div>
                    <span className="font-extralight font-poppins text-[14px] text-[#451A4A]">
                        {name}
                    </span>
                </>
            )}
        </div>
    );
};

export default InputName;
