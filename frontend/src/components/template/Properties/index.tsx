import { PagesPath, PropertiesFilterAndAdd } from "@/components/atoms"
import Image from "next/image"

function Properties() {
    return (
        <div className="w-[20px] rounded-[40px] flex-1 flex flex-col items-start justify-start bg-[#FFF] gap-[20px] px-[40px] py-[23px] ">
            <PagesPath
                name="Dashboard / Properties"
                link="/Dashboard/Properties"
                src="/icons/ArrowLeft.svg"
                alt="ArrowLeft"
                spanClassname=" text-[#4693F8]"
            />
            <div className="w-full bg-[#F2F8FF] flex flex-col rounded-[19px] h-[500px] pt-[10px] px-[10px] gap-[20px]">
                <PropertiesFilterAndAdd />
                <PropertiesTable />
            </div>
        </div>
    )
}

export default Properties


function PropertiesTable() {
    return (
        <div className="w-full flex flex-col ">
            <PropertiesTableHead />
            <PropertiesTableContent/>
            <PropertiesTableSeparator />
            <PropertiesTableContent/>
            <PropertiesTableSeparator />
            <PropertiesTableContent/>
            <PropertiesTableSeparator />
        </div>
    )
}

function PropertiesTableContent() {
    return (
        <div className="w-full flex px-[10px] rounded-[12px] h-[50px]">
            <div className="w-[70px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#4693F8] font-medium">9</span>
            </div>
            <div className="w-[220px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#4693F8] font-medium">apartement x</span>
            </div>
            <div className="w-[170px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#4693F8] font-medium">house</span>
            </div>
            <div className="w-[180px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#4693F8] font-medium">6</span>
            </div>
            <div className="w-[190px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#4693F8] font-medium">600 $</span>
            </div>
            <div className="w-[210px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#4693F8] font-medium">ahmad ali</span>
            </div>
            <div className="w-10 flex-1 h-full flex justify-center items-center gap-[20px]">
                <div className="relative object-cover w-[26px] h-[26px] cursor-pointer">
                    <Image src="/icons/EditPropertyIcon.svg" alt="EditPropertyIcon" fill={true}>

                    </Image>
                </div>
                <div className="relative object-cover w-[26px] h-[26px] cursor-pointer">
                    <Image src="/icons/RemovePropertyIcon.svg" alt="RemovePropertyIcon" fill={true}>

                    </Image>
                </div>
            </div>
        </div>
    )
}

function PropertiesTableHead() {
    return (
        <div className="w-full flex bg-[#FFF] px-[10px] rounded-[12px] h-[50px]">
            <div className="w-[70px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Id</span>
            </div>
            <div className="w-[220px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Name</span>
            </div>
            <div className="w-[170px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Type</span>
            </div>
            <div className="w-[180px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Number Of Units</span>
            </div>
            <div className="w-[190px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Rental Cost</span>
            </div>
            <div className="w-[210px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Tenants</span>
            </div>
            <div className="w-10 flex-1 h-full flex items-center justify-start pl-[10px] gap-1">
                <span className="text-[16px] text-[#68516A] font-medium">Edit</span>
                <span className="text-[16px] text-[#68516A] font-medium">/</span>
                <span className="text-[16px] text-[#68516A] font-medium">Remove</span>
            </div>
        </div>
    )
}

function PropertiesTableSeparator() {
    return (
        <div className="w-full flex items-center justify-center px-[20px] ">
            <div className="bg-[#68516A] h-[1px] w-full">

            </div>
        </div>
    )
}