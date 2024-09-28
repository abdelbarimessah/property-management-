'use client'
import Image from "next/image"
import { PagesPath, PaymentsFilterAndAdd, PropertiesFilterAndAdd } from "@/components/atoms"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "sonner"

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
                <PaymentsTable />
            </div>
        </div>
    )
}

export default Payments

function PaymentsTable() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/payments/AllPayments`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    })
    return (
        <div className="w-full flex flex-col">
            <PaymentsTableHead />
            {data.map((item: any, index: number) => (
                <PaymentsTableContent
                    key={index}
                    id={item.id}
                    name={item.tenant.name}
                    date={item.payment_date}
                    amount={item.amount}
                    settled={item.settled}
                />
            ))}
        </div>
    )
}

function PaymentsTableHead() {
    return (
        <div className="w-full flex bg-[#FFF] px-[10px] rounded-[12px] h-[50px]">
            <div className="w-[100px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Id</span>
            </div>
            <div className="w-[240px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Tenant Name</span>
            </div>
            <div className="w-[210px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Payment Date</span>
            </div>
            <div className="w-[220px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Amount</span>
            </div>
            <div className="w-[230px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Settled</span>
            </div>
            <div className="w-10 flex-1 h-full flex items-center justify-center pl-[10px] gap-1">
                <span className="text-[16px] text-[#68516A] font-medium">Remove</span>
            </div>
        </div>
    )
}

interface PaymentsTableContentProps {
    id: number;
    name: string;
    date: string;
    amount: number;
    settled: boolean;
}


function PaymentsTableContent(props: PaymentsTableContentProps) {

    const { id, name, amount, date, settled } = props ?? {};

    const dateOnly = date.split('T')[0];


    function handleRemovePayment() {
        const data = { id: id }
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/payments/removePayment`, data)
            .then((response) => {
                toast.success("Payment removed Successfully")
            })
            .catch((error) => {
                toast.error("Error in removing Payment")
                console.error(error);
            });
    }

    return (
        <div className="flex flex-col w-full">
            <div className="w-full flex px-[10px] rounded-[12px] h-[50px]">
                <div className="w-[100px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#68516A] font-medium">{id}</span>
                </div>
                <div className="w-[240px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#68516A] font-medium">{name}</span>
                </div>
                <div className="w-[210px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#68516A] font-medium">{dateOnly}</span>
                </div>
                <div className="w-[220px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#68516A] font-medium">{amount} $</span>
                </div>
                <div className="w-[230px] h-full flex items-center justify-start pl-[10px]">
                    {
                        settled ?
                            <span className="text-[16px] text-[#68516A] font-medium">Settled</span>
                            :
                            <span className="text-[16px] text-[#68516A] font-medium">Unsettled</span>
                    }
                </div>
                <div className="w-10 flex-1 h-full flex items-center justify-center pl-[10px] gap-1">
                    <div onClick={handleRemovePayment} className="relative object-cover w-[26px] h-[26px] cursor-pointer">
                        <Image src="/icons/RemovePropertyIcon.svg" alt="RemovePropertyIcon" fill={true}>
                        </Image>
                    </div>
                </div>
            </div>
            <PaymentsTableSeparator />
        </div>
    )
}

function PaymentsTableSeparator() {
    return (
        <div className="w-full flex items-center justify-center px-[20px] ">
            <div className="bg-[#68516A] h-[1px] w-full">

            </div>
        </div>
    )
}

// TODO : split the endpoint to new controllers and services
// TODO : 