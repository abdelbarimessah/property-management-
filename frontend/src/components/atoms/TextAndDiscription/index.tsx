import { TextAndDiscriptionProps } from '@/types';
import { cn } from '@/lib/utils';

const TextAndDiscription = (props: TextAndDiscriptionProps) => {
    const { text, discription, secondDiscription, classname, secondClassname } =
        props;
    return (
        <div className={cn('w-full flex flex-col ', classname)}>
            <span
                className={cn(
                    'font-poppins text-[54px] font-semibold text-[#451A4A]',
                    classname
                )}
            >
                {text}
            </span>
            <span
                className={cn(
                    'font-poppins text-[#451A4A] text-[22px] font-light',
                    classname
                )}
            >
                {discription}
            </span>
            <span className={cn(secondClassname)}>{secondDiscription}</span>
        </div>
    );
};

export default TextAndDiscription;
