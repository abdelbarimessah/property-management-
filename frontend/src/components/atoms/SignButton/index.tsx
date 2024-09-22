'use client'
import { SignbuttonProps } from '@/types';
import { cn } from '@/lib/utils';
import axios from 'axios';
import error from 'next/error';
import { useRouter } from 'next/navigation';

axios.defaults.withCredentials = true;


function SignButton(props: SignbuttonProps) {
  const { name, containerClassName, boxClassName, spanClassName, username, password } =
    props ?? {};
  const router = useRouter()

  async function handleSubmitClick() {
    const data = { username: username, password: password }
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
      .then(response => {
        router.push("/")
        console.log(response);

      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <div className={cn(`pt-[22px]`, containerClassName)}>
      <div
        onClick={handleSubmitClick}
        className={cn(
          `w-full flex items-center justify-center rounded-[18px] cursor-pointer drop-shadow-xl hover:drop-shadow-none`,
          boxClassName
        )}
      >
        <span
          className={cn(
            'text-[27px] font-poppins font-semibold ',
            spanClassName
          )}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

export default SignButton;
