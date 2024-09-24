"use client";
import { SignbuttonProps } from "@/types";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

axios.defaults.withCredentials = true;

function SignButton(props: SignbuttonProps) {
  const {
    name,
    containerClassName,
    boxClassName,
    spanClassName,
    username,
    password,
    SignType,
  } = props ?? {};
  const router = useRouter();

  async function handleSubmitClick() {
    const data = { username: username, password: password };

    if (SignType === "login") {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
        .then((response) => {
          toast.success("login succesfly.")
          router.push("/Dashboard/Properties");
        })
        .catch((error) => {
          toast.error("username or password incorrect, try again please.")
          console.error(error);
        });
    } else if (SignType === "registre") {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, data)
        .then((response) => {
          toast.success("register succesfly.")
          router.push("/SignIn");
        })
        .catch((error) => {
          
          toast.error("error in the sign up, try again please.")
          console.error(error);
        });
    }
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
            "text-[27px] font-poppins font-semibold ",
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
