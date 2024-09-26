'use client'
import { PagesPath, PropertiesFilterAndAdd } from "@/components/atoms"
import axios from "axios";
import Image from "next/image"
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
            <div className="w-full bg-[#F2F8FF] flex flex-col rounded-[19px] h-[500px] pt-[10px] px-[10px] gap-[20px] relative">
                <PropertiesFilterAndAdd />
                <PropertiesTable />
            </div>
        </div>
    )
}

export default Properties


function PropertiesTable() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/user/allProperty`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    })

    return (
        <div className="w-full flex flex-col ">
            <PropertiesTableHead />

            {data.map((item: any, index: number) => (
                <PropertiesTableContent
                    key={index}
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    number_of_units={item.number_of_units}
                    rental_cost={item.rental_cost}
                    tenants={item.tenants}
                />
            ))}
        </div>
    )
}

interface PropertiesTableContentProps {
    id: number
    name: string
    type: string
    number_of_units: number
    rental_cost: number
    tenants: any
}

function PropertiesTableContent(props: PropertiesTableContentProps) {

    const { id, name, type, number_of_units, rental_cost, tenants } = props ?? {}

    const [showAllTenants, setShowAllTenants] = useState(false);

    const handleToggleTenants = () => {
        setShowAllTenants(!showAllTenants);
    };

    function handleRemoveProperty() {
        const data = { id: id }
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/user/removeProperty`, data)
            .then((response) => {
                toast.success("Property removed Successfully")
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="flex flex-col w-full">

            <div className="w-full flex px-[10px] rounded-[12px] h-[50px]">
                <div className="w-[70px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{id}</span>
                </div>
                <div className="w-[220px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{name}</span>
                </div>
                <div className="w-[170px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{type}</span>
                </div>
                <div className="w-[180px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{number_of_units}</span>
                </div>
                <div className="w-[190px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{rental_cost} $</span>
                </div>
                <div className="w-[210px] h-full flex items-center justify-start pl-[10px]">
                    {
                        Array.isArray(tenants) && tenants.length > 0 ? (
                            <div className="flex gap-[2px]"> 
                                <span className="text-[16px] text-[#4693F8] font-medium cursor-pointer" onClick={handleToggleTenants}>
                                    {tenants[0].name} {tenants.length > 1 && !showAllTenants && `(+${tenants.length - 1})`}
                                </span>
                                {showAllTenants && tenants.slice(1).map((tenant, index) => (
                                    <span key={index} className="text-[16px] text-[#4693F8] font-medium">
                                        {tenant.name}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <span className="text-[16px] text-[#4693F8] font-medium">no tenants</span>
                        )
                    }
                </div>
                <div className="w-10 flex-1 h-full flex justify-center items-center gap-[20px]">
                    <div className="relative object-cover w-[26px] h-[26px] cursor-pointer">
                        <Image src="/icons/EditPropertyIcon.svg" alt="EditPropertyIcon" fill={true}>

                        </Image>
                    </div>
                    <div onClick={handleRemoveProperty} className="relative object-cover w-[26px] h-[26px] cursor-pointer">
                        <Image src="/icons/RemovePropertyIcon.svg" alt="RemovePropertyIcon" fill={true}>
                        </Image>
                    </div>
                </div>
            </div>
            <PropertiesTableSeparator />
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