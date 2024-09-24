import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface PagesPathProps {
  name: string;
  link: string;
  src: string;
  alt: string;
  spanClassname?: string;
}

function PagesPath(props: PagesPathProps) {
  const { name, link, src, alt, spanClassname } = props ?? {};

  return (
    <Link href={link}>
      <div className="flex gap-[10px] items-center justify-center ">
        <div className="w-[16px] h-[12px] relative object-cover">
          <Image src={src} alt={alt} fill={true}></Image>
        </div>
        <span
          className={cn(
            'font-poppins text-[18px] font-semibold',
            spanClassname
          )}
        >
          {name}
        </span>
      </div>
    </Link>
  );
}

export default PagesPath;
