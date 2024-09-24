'use client';
import Image from 'next/image';
import { NavBareSectionsProps } from '@/types';
import { usePathname } from 'next/navigation';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { TurbineIconAnimation } from '@/animation';
import Link from 'next/link';


const ToggelData = [
    {
        link: "http://localhost:8000/Dashboard/Properties ",
        name: "Properties",
        src: '/icons/TurbineStaticIcon.svg',
        alt: 'TurbineActiveIcon',
        activeSrc: '/icons/TurbineActiveIcon.svg',
        AnimationData:  TurbineIconAnimation 
    },
    {
        link: "http://localhost:8000/Dashboard/Tenants ",
        name: "Tenants",
        src: '/icons/TurbineStaticIcon.svg',
        alt: 'TurbineActiveIcon',
        activeSrc: '/icons/TurbineActiveIcon.svg',
        AnimationData:  TurbineIconAnimation 
    },
    {
        link: "http://localhost:8000/Dashboard/Payments ",
        name: "Payments",
        src: '/icons/TurbineStaticIcon.svg',
        alt: 'TurbineActiveIcon',
        activeSrc: '/icons/TurbineActiveIcon.svg',
        AnimationData: TurbineIconAnimation 
    },
]

const DashboardSection = (props: NavBareSectionsProps) => {
    const { name, src, alt, activeSrc, AnimationData } =
        props ?? {};

    const pathname = usePathname();
    const isActive = pathname !== '/' + name;
    const srcName = !isActive ? activeSrc : src;

    const [toggel, setToggel] = useState(false);
    const [isHovered, setIsHovered] = useState(false);




    return (
        <div
            onClick={() => {
                setToggel(!toggel)
            }}
            className='flex flex-col gap-[10px] w-[245px] relative'
        >
            <div
                className=" py-3 flex pl-[36px] cursor-pointer rounded-[24px] hover:opacity-90 justify-start items-center gap-[30px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-[30px] h-[30px] object-cover">
                    {isHovered ? (
                        <Lottie
                            animationData={AnimationData}
                            style={{ width: 30, height: 30 }}
                        />
                    ) : (
                        <Image src={srcName} alt={alt} fill={true} />
                    )}
                </div>

                {!isHovered && isActive ? (
                    <span className="font-poppins text-[20px] font-normal text-[#68516A]">
                        {name}
                    </span>
                ) : (
                    <span className="font-poppins text-[20px] font-normal text-[#4693F8]">
                        {name}
                    </span>
                )}

            </div>
            {toggel &&
                <div className='w-full h-[100px] top-[55px] rounded-[12px] absolute flex flex-col justify-center items-start gap-[10px]' >
                    {ToggelData.map((data, index) => (

                        <ToggelSection key={index} link={data.link} name={data.name} src={data.src} alt={data.alt} activeSrc={data.activeSrc} AnimationData={data.AnimationData} />
                    ))}
                </div>
            }

        </div>
    );
};



export default DashboardSection;

interface ToggelSectionProops extends NavBareSectionsProps {
    link: string;
}

const ToggelSection = (props: ToggelSectionProops) => {
    const { name, src, alt, activeSrc, activeTextColor, AnimationData, link } =
        props ?? {};
    const pathname = usePathname();
    const isActive = pathname !== '/' + name;

    const srcName = !isActive ? activeSrc : src;

    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link href={link}>
            <div
                className="w-[245px] flex pl-[60px] cursor-pointer rounded-[24px] hover:opacity-90 justify-start items-center gap-[20px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-[25px] h-[25px] object-cover">
                    {isHovered ? (
                        <Lottie
                            animationData={AnimationData}
                            style={{ width: 25, height: 25 }}
                        />
                    ) : (
                        <Image src={srcName} alt={alt} fill={true} />
                    )}
                </div>

                {!isHovered && isActive ? (
                    <span className="font-poppins text-[17px] font-normal text-[#68516A]">
                        {name}
                    </span>
                ) : (
                    <span className="font-poppins text-[17px] font-normal text-[#4693F8]">
                        {name}
                    </span>
                )}
            </div>
        </Link>
    )
}