import { cn } from '@/lib/utils';
import Image from 'next/image';

interface NavBareProfileImageProps {
  src: string;
  alt: string;
  classname?: string;
}

const NavBareProfileImage = (props: NavBareProfileImageProps) => {
  const { src, alt, classname } = props ?? {};
  return (
    <div className={cn('relative object-cover ', classname)}>
      <Image src={src} alt={alt} fill={true}></Image>
    </div>
  );
};

export default NavBareProfileImage;
