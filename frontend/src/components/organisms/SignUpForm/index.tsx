'use client'
import {
  MessageAndLink,
  SignButton,
  TextAndDiscription,
} from "@/components/atoms";
import { SignUpInputs } from "@/components/molecules";
import { useSignInHook } from "@/hooks";

const SignUpForm = () => {
  const { usernameData, passwordData, username, password } = useSignInHook();

  return (
    <div className="flex pt-[30px] ">
      <div className=" w-[526px]  items-start justify-start ">
        <div className="flex gap-[36px] flex-col">
          <TextAndDiscription
            text="Hello,"
            discription="Please enter your personnel information"
          />
          <SignUpInputs
            usernameData={usernameData}
            passwordData={passwordData}
          />
        </div>
        <SignButton
          SignType="registre"
          username={username}
          password={password}
          name="Sign Up"
          containerClassName="w-full"
          boxClassName="bg-[#4693F8] h-[90px] hover:bg-[#4693F8]/90"
          spanClassName="text-[#FFF]"
        />
        <MessageAndLink
          name="Login"
          message="Already have an account?"
          link="/SignIn"
        />
      </div>
    </div>
  );
};

export default SignUpForm;
