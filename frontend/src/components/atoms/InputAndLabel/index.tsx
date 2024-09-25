'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type InputAndLabelProps = {
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  src?: string;
  alt?: string;
  classname?: string;
  imageClassname?: string;
  type: string;
  nameData?: any;
  number_of_unitsData?: any;
  rental_costData?: any;
  tenantsData?: any;
};

function InputAndLabel(props: InputAndLabelProps) {
  const { imageClassname, label, placeholder, onChange, src, alt, classname, type, nameData, number_of_unitsData, rental_costData, tenantsData } =
    props ?? {};

  const [change, setChange] = useState(false);
  const [value, setValue] = useState('');
  const [inputType, setInputType] = useState('number')

  useEffect(() => {
    if (type === "name") {
      setInputType("text");
    } else {
      setInputType("number");
    }
  }, [type]);


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
          type={inputType}

          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (type === "name")
              nameData(e.target.value)
            else if (type === "number_of_units")
              number_of_unitsData(e.target.value)
            else if (type === "rental_cost")
              rental_costData(e.target.value)
            else if (type === "tenants")
              tenantsData(e.target.value)
          }}
          onClick={() => {
            setChange(true);
          }}
          onBlur={() => {
            if (value === '') {
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

export default InputAndLabel;
