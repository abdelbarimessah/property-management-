import { HeaderIcons, WelcomeMessage } from '@/components/atoms';
import { SearchIconAnimation, NotificationIconAnimation } from '@/animation';
import { HeaderIconsProps } from '@/types';

const LeftHeader = () => {
  const HeaderData: HeaderIconsProps[] = [
    {
      src: '/icons/search.svg',
      alt: 'NotificationMale',
      classname: 'w-[30px] h-[30px]',
      animationData: SearchIconAnimation,
    },
    {
      src: '/icons/Notification.svg',
      alt: 'SearchMale',
      classname: 'w-[30px] h-[30px]',
      animationData: NotificationIconAnimation,
    },
  ];

  return (
    <div className="flex w-[1310px] justify-between items-center">
      <WelcomeMessage name="Imad, Abid" textColor="text-[#4693F8]" />
      <div className="flex justify-start gap-[27px]">
        {HeaderData.map((HeaderData, index) => (
          <HeaderIcons
            key={index}
            src={HeaderData.src}
            alt={HeaderData.alt}
            classname={HeaderData.classname}
            animationData={HeaderData.animationData}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftHeader;
