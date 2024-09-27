import { PagesPath, PaymentsFilterAndAdd, PropertiesFilterAndAdd } from "@/components/atoms"

function Payments() {
    return (
        <div className="w-[20px] rounded-[40px] flex-1 flex flex-col items-start justify-start bg-[#FFF] gap-[20px] px-[40px] py-[23px] ">
            <PagesPath
                name="Dashboard / Payments"
                link="/Dashboard/Payments"
                src="/icons/ArrowLeft.svg"
                alt="ArrowLeft"
                spanClassname=" text-[#4693F8]"
            />
            <div className="w-full bg-[#F2F8FF] flex flex-col rounded-[19px] h-[500px] pt-[10px] px-[10px] gap-[20px] relative">
                <PaymentsFilterAndAdd />
            </div>
        </div>
    )
}

export default Payments