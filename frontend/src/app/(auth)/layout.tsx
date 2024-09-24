import { Header, NavBare } from '@/components/organisms';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`flex bg-[#F2F8FF] gap-[33px] flex-col w-screen min-h-screen pt-[45px] px-[77px] `}
    >
      <Header />
      <div className=" flex gap-[75px]">
        <NavBare />
        {children}
      </div>
    </div>
  );
}
