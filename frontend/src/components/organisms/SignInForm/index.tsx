'use client'
import { SignInInputs } from '@/components/molecules';
import {
  MessageAndLink,
  SignButton,
  TextAndDiscription,
} from '@/components/atoms';
import { useSignInHook } from '@/hooks';
import axios from 'axios';


const SignInForm = () => {

  const { usernameData, passwordData, username, password } = useSignInHook();

  return (
    <div className="flex pt-[64px]">
      <div className=" w-[675px]  ">
        <div className="flex flex-col gap-[36px]">
          <TextAndDiscription
            text="Welcom back"
            discription="Please enter your log in details below"
          />
          <SignInInputs usernameData={usernameData} passwordData={passwordData} />
        </div>
        <SignButton
          username={username}
          password={password}
          name="Login"
          containerClassName="w-full"
          boxClassName="bg-[#4693F8] h-[90px] hover:bg-[#4693F8]/90"
          spanClassName="text-[#FFF]"
        />

        <MessageAndLink
          name="Sign up"
          message="Don't have an account?"
          link="/SignUp"
        />
      </div>
    </div>
  );
};

export default SignInForm;
