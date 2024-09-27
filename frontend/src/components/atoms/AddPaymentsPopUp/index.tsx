'use client'
import { useNewPayment } from "@/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface tenants {
    id: number;
    name: string;
}



function AddPaymentsPopUp(props: any) {
    const { setAddPopUp } = props ?? {};
    
    const { settled, amount, payment_date, tenant_id, amountData, payment_dateData, tenant_idData, settledData } = useNewPayment();
    const [tenants, setTenants] = useState<tenants[]>([]);
    const [showSelectOptions, setShowSelectOptions] = useState(false);


    function handdleSave() {

        const data = { tenant_id: tenant_id, amount: amount, settled: settled, payment_date: payment_date }
        if (payment_date === '' || amount === 0)
            toast.error("fill all the filds")
        else {

            axios
                .post(`${process.env.NEXT_PUBLIC_API_URL}/user/NewPayment`, data)
                .then((response) => {
                    toast.success("Payment Added Successfully")
                    setAddPopUp(false)
                })
                .catch((error) => {
                    toast.error("Error When Adding Payment")
                    console.error(error);
                });
        }
    }

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/user/allTenants`)
            .then((response) => {
                setTenants(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])


    return (
        <div className="absolute w-full h-[500px] rounded-[19px] bg-[#F2F8FF] gap-[35px] flex flex-col pt-[35px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-full flex items-center justify-center">
                <span className="font-semibold text-[30px] text-[#68516A]">Add New Payments</span>
            </div>
            <div className="w-full flex flex-col gap-[40px] relative">
                <div className="w-full flex flex-col gap-[20px]">
                    <div className="flex w-full items-center justify-center gap-[30px]">
                        <AmountInput amountData={amountData} />
                        <DataInput payment_dateData={payment_dateData} />
                    </div>
                    <div className="flex w-full items-center justify-center gap-[30px]">

                        <SetteldInput settledData={settledData} settled={settled} />
                        <div className="flex flex-col gap-[6px]">
                            <span className=" text-[15px] text-[#4693F8]/80 ml-[10px]">
                                Tenant
                            </span>
                            <div onClick={() => {
                                setShowSelectOptions(!showSelectOptions)
                            }} className="w-[250px] h-[48px] cursor-pointer pl-[24px] flex items-center relative bg-[#FFF] rounded-[13px] border border-[#F3F3F3]" >
                                <span className="font-poppins text-[#7D7D7D]/40 text-[14px] font-medium">
                                    tenant
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-end justify-center gap-[30px]">
                    <div className="w-[250px] h-[40px] flex gap-[10px]">
                        <div onClick={() => { setAddPopUp(false) }} className="h-full w-[100px] rounded-[11px] cursor-pointer bg-[#cfcece] px-[10px] flex items-center justify-center">
                            <span className="text-[#FFF]">Cancel</span>
                        </div>
                        <div onClick={handdleSave} className="h-full w-[100px] rounded-[11px] cursor-pointer bg-[#4693F8] px-[10px] flex items-center justify-center">
                            <span className="text-[#FFF]">Save</span>
                        </div>
                    </div>
                </div>

                {
                    showSelectOptions &&
                    <div className="w-[250px] border border-[#F3F3F3] flex flex-col absolute top-[173px] rounded-[13px] left-[630px] bg-[#FFF]">
                        {tenants.map((item, index) => (
                            <TenantItem key={index} name={item.name} id={item.id} tenant_idData={tenant_idData} setShowSelectOptions={setShowSelectOptions} showSelectOptions={showSelectOptions} />
                        ))}
                    </div>
                }
            </div>

        </div>
    )
}

interface TenantItemProps {
    name: string;
    id: number;
    setShowSelectOptions?: any;
    tenant_idData?: any;
    showSelectOptions: boolean;
}

function TenantItem(props: TenantItemProps) {
    const { name, id, setShowSelectOptions, showSelectOptions, tenant_idData } = props ?? {};

    function handleClick() {
        console.log("click");

        setShowSelectOptions(!showSelectOptions)
        tenant_idData(id)
    }

    return (
        <div onClick={handleClick} className="flex flex-col w-full">
            <div className="w-full flex items-center justify-center h-[40px] cursor-pointer">
                <span className="text-[16px] font-medium text-[#68516A]/60">{name}</span>
            </div>
            <div className="w-full h-[1px] bg-[#F3F3F3] ">
            </div>
        </div>
    )
}


export default AddPaymentsPopUp


interface AmountInputProps {
    amountData: any;
}


function AmountInput(props: AmountInputProps) {

    const { amountData } = props ?? {};

    const [change, setChange] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className="flex flex-col gap-[6px]">
            <span className=" text-[15px] text-[#4693F8]/80 ml-[10px]">
                Amount
            </span>

            <div
                className=' w-[250px] h-[48px] flex items-center relative bg-[#FFF] rounded-[13px] border border-[#F3F3F3] '>
                <input
                    type='number'
                    onChange={(e) => {
                        setValue(e.target.value);
                        amountData(e.target.value)
                    }}
                    onClick={() => {
                        setChange(true);
                    }}
                    onBlur={() => {
                        if (value === '') {
                            setChange(false);
                        }
                    }}
                    className="text-[#68516A]  bg-transparent w-full h-full px-[24px] tracking-wider placeholder:text-[#4693F8] placeholder:font-light font-[400] rounded-[18px] text-[17px] focus:outline-none absolute top-0 left-0"
                />
                {!change && (
                    <div className="flex gap-[14px] pl-[24px]">
                        <span className="font-poppins text-[#7D7D7D]/40 text-[14px] font-medium">
                            Amount
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}


interface DataInputProps {
    payment_dateData: any
}

function DataInput(props: DataInputProps) {

    const { payment_dateData } = props ?? {}

    return (
        <div className="flex flex-col gap-[6px]">
            <span className=" text-[15px] text-[#4693F8]/80 ml-[10px]">
                Payment date
            </span>

            <div
                className=' w-[250px] h-[48px] flex items-center relative bg-[#FFF] rounded-[13px] border border-[#F3F3F3] '>
                <input
                    type='date'
                    onChange={(e) => {
                        payment_dateData(e.target.value)
                    }}
                    className="text-[#68516A]  bg-transparent w-full h-full px-[24px] tracking-wider placeholder:text-[#4693F8] placeholder:font-light font-[400] rounded-[18px] text-[17px] focus:outline-none absolute top-0 left-0"
                />
            </div>
        </div>
    )
}

interface SetteldInputProps {
    settledData: any;
    settled: boolean;
}

function SetteldInput(props: SetteldInputProps) {

    const { settledData, settled } = props ?? {};

    const [options, setOptions] = useState(false);

    function handleSelect(state: boolean) {
        settledData(state)
        setOptions(false)
    }

    return (
        <div className="flex flex-col gap-[6px]">
            <span className=" text-[15px] text-[#4693F8]/80 ml-[10px]">
                Payment Status
            </span>

            <div onClick={() => { setOptions(!options) }} className=' w-[250px] px-[24px] h-[48px] flex items-center relative bg-[#FFF] rounded-[13px] border border-[#F3F3F3] cursor-pointer'>
                {
                    settled ?
                        <span className="font-poppins text-[#7D7D7D]/40 text-[14px] font-medium">
                            Settled
                        </span>
                        :
                        <span className="font-poppins text-[#7D7D7D]/40 text-[14px] font-medium">
                            Unsettled
                        </span>
                }
            </div>

            {
                options &&
                <div className="w-[250px] border border-[#F3F3F3] flex flex-col absolute top-[173px] rounded-[13px] left-[350px] bg-[#FFF]">
                    <div onClick={() => handleSelect(false)} className="w-full flex items-center justify-center h-[40px] cursor-pointer">
                        <span className="text-[16px] font-medium text-[#68516A]/60">Unsettled</span>
                    </div>
                    <div className="w-full h-[1px] bg-[#F3F3F3] ">
                    </div>
                    <div onClick={() => handleSelect(true)} className="w-full flex items-center justify-center h-[40px] cursor-pointer">
                        <span className="text-[16px] font-medium text-[#68516A]/60">Settled</span>
                    </div>
                    <div className="w-full h-[1px] bg-[#F3F3F3] ">
                    </div>
                </div>
            }
        </div>
    )
}