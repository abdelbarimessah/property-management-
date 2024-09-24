'use client'
import { useUserData } from '@/hooks';
import { cn } from '@/lib/utils';
import axios from 'axios';

axios.defaults.withCredentials = true;

interface NavBareProfileNameProps {
  firstName?: string;
  lastName?: string;
  login?: string;
  textColor?: string;
}

const NavBareProfileName = (props: NavBareProfileNameProps) => {
  
  const { username, loading } = useUserData();

  const { textColor } = props ?? {};

  if (loading) return (
    <span
      className={cn('font-poppins text-[24px] font-semibold', textColor)}
    >
      Loading..
    </span>
  )
  return (

    <span
      className={cn('font-poppins text-[24px] font-semibold', textColor)}
    >
      {username}
    </span>
  );
};

export default NavBareProfileName;
