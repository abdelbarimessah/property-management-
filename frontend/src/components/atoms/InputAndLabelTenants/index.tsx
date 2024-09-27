'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type InputAndLabelProps = {
    label: string;
    placeholder: string;
    classname?: string;
    name?: string;
    contact_details?: string;
    section?: string;
    nameData?: any;
    contact_detailsData?: any;
    sectionData?: any;
    type: string;
};

function InputAndLabelTenants(props: InputAndLabelProps) {
    const { label, placeholder, classname, type, nameData, contact_detailsData, sectionData } =
        props ?? {};

    const [change, setChange] = useState(false);
    const [value, setValue] = useState('');



    useEffect(() => {
        if (value === '') {
            if (type === "name")
                nameData(placeholder)
            else if (type === "contact")
                contact_detailsData(placeholder)
            else if (type === "section")
                sectionData(placeholder)
        }
    })

    return (
        <div className="flex flex-col gap-[6px]">
            <span className=" text-[15px] text-[#4693F8]/80 ml-[10px]">
                {label}
            </span>

            <div
                className={cn(
                    'flex items-center relative bg-[#FFF] rounded-[13px] border border-[#F3F3F3] ',
                    classname
                )}
            >
                <input
                    type="text"

                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        if (type === "name")
                            nameData(e.target.value)
                        else if (type === "contact")
                            contact_detailsData(e.target.value)
                        else if (type === "section")
                            sectionData(e.target.value)
                    }}
                    onClick={() => {
                        setChange(true);
                    }}
                    onBlur={() => {
                        if (value === '') {
                            if (type === "name")
                                nameData(placeholder)
                            else if (type === "contact")
                                contact_detailsData(placeholder)
                            else if (type === "section")
                                sectionData(placeholder)
                            setChange(false);
                        }
                    }}
                    className="text-[#68516A]  bg-transparent w-full h-full px-[24px] tracking-wider placeholder:text-[#4693F8] placeholder:font-light font-[400] rounded-[18px] text-[17px] focus:outline-none absolute top-0 left-0"
                />
                {!change && (
                    <div className="flex gap-[14px] pl-[24px]">
                        <span className="font-poppins text-[#7D7D7D]/40 text-[14px] font-medium">
                            {placeholder}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputAndLabelTenants;
