'use client';
import Link from 'next/link';
import { MessageAndLinkProps } from '@/types';

function MessageAndLink(props: MessageAndLinkProps) {

  const { name, message, link } = props ?? {};
  return (
    <div className="w-full pt-[30px]">
      <div className="w-full flex items-center justify-center gap-2">
        <span className="text-[18px] font-poppins text-[#4693F8] font-light">
          {message}
        </span>
        <Link href={link}>
          <span className="cursor-pointer text-[18px] font-poppins text-[#451A4A] font-light">
            {name}
          </span>
        </Link>
      </div>
    </div>
  )
}


export default MessageAndLink;
