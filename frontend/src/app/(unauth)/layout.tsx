
export default function MaleLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className=' bg-[#F2F8FF] flex w-screen min-h-screen items-center justify-center'
        >
            {children}
        </div>
    );
}
