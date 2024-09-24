'use client'
import { DashboardSection, NavBareSection } from '@/components/atoms';
import { NavBareSectionsProps } from '@/types';
import {
  SettingsIconAnimation,
  ProfileIconAnimation,
  DashboardIconAnimation,
} from '@/animation';

const NavBareSections = () => {
  const dataNavBareSections: NavBareSectionsProps[] = [

    {
      name: 'Profile',
      src: '/icons/ProfileUnactiveIcon.svg',
      alt: 'ProfileLogo',
      activeSrc: '/icons/ProfileStaticIcon.svg',
      activeTextColor: 'text-[#FFF]',
      AnimationData: ProfileIconAnimation,
    },
    {
      name: 'Settings',
      src: '/icons/SettingUnactiveIcon.svg',
      alt: 'Settings',
      activeSrc: '/icons/SettingStaticIcon.svg',
      activeTextColor: 'text-[#FFF]',
      AnimationData: SettingsIconAnimation,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {dataNavBareSections.map((dataNavBareSections, index) => (
        <NavBareSection
          key={index}
          name={dataNavBareSections.name}
          src={dataNavBareSections.src}
          alt={dataNavBareSections.alt}
          activeSrc={dataNavBareSections.activeSrc}
          activeTextColor={dataNavBareSections.activeTextColor}
          AnimationData={dataNavBareSections.AnimationData}
        />
      ))}
      <DashboardSection  name='Dashboard'
          src='/icons/DashboardUnactiveIcon.svg'
          alt='Settings'
          activeSrc='/icons/DashboardStaticIcon.svg'
          activeTextColor='text-[#FFF]'
          AnimationData={DashboardIconAnimation} />
    </div>
  );
};

export default NavBareSections;
