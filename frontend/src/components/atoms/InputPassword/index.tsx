'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { InputNameProps } from '@/types';
import { cn } from '@/lib/utils';

const InputPassword = (props: InputNameProps) => {
  const { src, alt, classname, name, passwordData } = props;
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [passWordValues, setPassWordValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    const cursorPosition = passwordInputRef.current?.selectionStart;

    setPassWordValues({
      ...passWordValues,
      showPassword: !passWordValues.showPassword,
    });

    setTimeout(() => {
      if (passwordInputRef.current) {
        passwordInputRef.current.selectionStart = cursorPosition
          ? cursorPosition
          : 0;
        passwordInputRef.current.selectionEnd = cursorPosition
          ? cursorPosition
          : 0;
        passwordInputRef.current.focus();
      }
    }, 0);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop: any) => (event: any) => {
    setPassWordValues({
      ...passWordValues,
      [prop]: event.target.value,
    });
  };

  return (
    <div
      className={cn(
        ` w-full bg-[#D2E6FF] rounded-[18px] hover:opacity-90 hover:cursor-text relative flex justify-between items-center p-[35px]`,
        classname
      )}
    >
      <input
        autoComplete="false"
        ref={passwordInputRef}
        onChange={(event) => {
          handlePasswordChange('password')(event);
          if (passwordData) {
            passwordData(event.target.value)
          }
        }}
        value={passWordValues.password}
        type={passWordValues.showPassword ? 'text' : 'password'}
        onClick={() => {
          setShowPasswordIcon(true);
        }}
        onBlur={() => {
          if (passWordValues.password === '') {
            setShowPasswordIcon(false);
          }
        }}
        className="text-[#451A4A]/90 bg-transparent w-full h-full px-[35px] tracking-wider placeholder:text-color-0 placeholder:font-light font-poppins font-[400] rounded-[18px] text-[17px] focus:outline-none absolute top-0 left-0"
      />
      {!showPasswordIcon && (
        <div className="flex gap-[18px] ">
          <div className="relative h-[21px] w-[21px] object-cover">
            <Image src={src} alt={alt} fill={true}></Image>
          </div>
          <span className="font-extralight font-poppins text-[14px] text-[#451A4A]">
            {name}
          </span>
        </div>
      )}
      <div className="absolute right-[35px] h-full flex items-center justify-center">
        <div
          onMouseDown={handleMouseDownPassword}
          onClick={handleClickShowPassword}
          className="relative object-cover w-[24px] h-[18px] cursor-pointer "
        >
          <Image
            className="hover:opacity-80"
            src={'/icons/showPasswordIcon.svg'}
            alt="showPasswordIcon"
            fill={true}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default InputPassword;
