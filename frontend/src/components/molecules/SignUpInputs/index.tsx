'use client'
import { InputName, InputPassword } from "@/components/atoms";

const SignUpInputs = (props: any) => {
  const { usernameData, passwordData } = props ?? {};

  return (
    <div className="w-full flex flex-col gap-[27px] ">
      <InputName
        usernameData={usernameData}
        name="Username"
        src="/icons/ProfileIconSignIn.svg"
        alt="ProfileIconSignIn"
        classname="h-[72px]"
      />

      <InputPassword
        passwordData={passwordData}
        name="Password"
        src="/icons/PasswordIconSignIn.svg"
        alt="PasswordIconSignIn"
        classname="h-[72px]"
      />
    </div>
  );
};

export default SignUpInputs;
