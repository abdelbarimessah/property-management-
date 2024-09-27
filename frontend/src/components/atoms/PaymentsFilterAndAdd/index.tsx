'use client'
import { useState } from "react"
import Image from "next/image"
import { AddPaymentsPopUp } from "@/components/atoms"

function PaymentsFilterAndAdd() {

    const [addPopUp, setAddPopUp] = useState(false)

    return (
        <div className="w-full flex justify-end gap-[10px]">
            <div className="w-[100px] h-[36px] rounded-[10px] bg-[#FFF] gap-[12px] flex items-center justify-center cursor-pointer">
                <span className="text-[14px] text-[#4693F8] font-semibold">Filter</span>
                <div className="relative object-cover w-[12px] h-[13px]">
                    <Image src="/icons/FilterIcon.svg" alt="FilterIcon" fill={true}>

                    </Image>
                </div>
            </div>
            <div
                onClick={() => { setAddPopUp(true) }}
                className="w-[160px] h-[36px] rounded-[10px] bg-[#4693F8] gap-[12px] flex items-center justify-center cursor-pointer"
            >
                <span className="text-[14px] text-[#FFF] font-semibold">Add New Payment</span>
                <div className="relative object-cover w-[12px] h-[12px]">
                    <Image src="/icons/AddPropertyIcon.svg" alt="AddPropertyIcon" fill={true}>

                    </Image>
                </div>
            </div>
            {
                addPopUp &&
                <AddPaymentsPopUp setAddPopUp={setAddPopUp} />
            }
        </div>
    )
}


export default PaymentsFilterAndAdd
