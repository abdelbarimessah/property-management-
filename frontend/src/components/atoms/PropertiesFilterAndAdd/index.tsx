'use client'
import Image from "next/image";
import { useState } from "react";
import InputAndLabel from "../InputAndLabel";
import { useNewProperty } from "@/hooks";
import axios from "axios";
import { toast } from "sonner";


function PropertiesFilterAndAdd() {

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
                <span className="text-[14px] text-[#FFF] font-semibold">Add New Proprty</span>
                <div className="relative object-cover w-[12px] h-[12px]">
                    <Image src="/icons/AddPropertyIcon.svg" alt="AddPropertyIcon" fill={true}>

                    </Image>
                </div>
            </div>
            {
                addPopUp &&
                <AddPropertyPopUp setAddPopUp={setAddPopUp} />
            }
        </div>
    )
}

export default PropertiesFilterAndAdd;


function AddPropertyPopUp(props: any) {
    const { setAddPopUp } = props ?? {};

    const { name, number_of_units, rental_cost, type, typeData, nameData, number_of_unitsData, rental_costData } = useNewProperty();
    const [showSelectOptions, setShowSelectOptions] = useState(false);


    const handleSelect = (type: string) => {
        typeData(type);
        setShowSelectOptions(false);
    };

    function handdleSave() {
        const data = { name: name, number_of_units: number_of_units, rental_cost: rental_cost, type: type }
        if (type === "Property Type" || name === "" || number_of_units === 0 || rental_cost === 0)
            toast.error("error in one of the field")
        else {
            setAddPopUp(false)
            axios
                .post(`${process.env.NEXT_PUBLIC_API_URL}/properties/NewProperty`, data)
                .then((response) => {
                    toast.success("Property Added Successfully")
                })
                .catch((error) => {
                    toast.error("Error When Adding Property")
                    console.error(error);
                });
        }
    }

    return (
        <div className="absolute w-full h-[500px] rounded-[19px] bg-[#F2F8FF] gap-[35px] flex flex-col pt-[35px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-full flex items-center justify-center">
                <span className="font-semibold text-[30px] text-[#68516A]">Add New Property</span>
            </div>
            <div className="w-full flex flex-col gap-[40px] relative">
                <div className="w-full flex flex-col gap-[20px]">
                    <div className="flex w-full items-center justify-center gap-[30px]">
                        <InputAndLabel label={"Property Name"} placeholder={"Property Name"} classname="w-[250px] h-[48px]" type="name" nameData={nameData} />
                        <InputAndLabel label={"Number Of Units"} placeholder={"Number Of Units"} classname="w-[250px] h-[48px]" type="number_of_units" number_of_unitsData={number_of_unitsData} />
                    </div>
                    <div className="flex w-full items-center justify-center gap-[30px]">
                        <InputAndLabel label={"Rental Cost"} placeholder={"Rental Cost"} classname="w-[250px] h-[48px]" type="rental_cost" rental_costData={rental_costData} />
                        <div className="flex flex-col gap-[6px]">
                            <span className=" text-[15px] text-[#4693F8]/80 ml-[10px]">
                                Property Type
                            </span>
                            <div onClick={() => {
                                setShowSelectOptions(!showSelectOptions)
                            }} className="w-[250px] h-[48px] cursor-pointer pl-[24px] flex items-center relative bg-[#FFF] rounded-[13px] border border-[#F3F3F3]" >
                                <span className="font-poppins text-[#7D7D7D]/40 text-[14px] font-medium">
                                    {type}
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
                    <div className="w-[250px] border border-[#F3F3F3] flex flex-col absolute -bottom-[85px] rounded-[13px] left-[630px] bg-[#FFF]">
                        <div onClick={() => handleSelect("Apartment")} className="w-full flex items-center justify-center h-[40px] cursor-pointer">
                            <span className="text-[16px] font-medium text-[#68516A]/60">Apartment</span>
                        </div>
                        <div className="w-full h-[1px] bg-[#F3F3F3] ">
                        </div>
                        <div onClick={() => handleSelect("House")} className="w-full flex items-center justify-center h-[40px] cursor-pointer">
                            <span className="text-[16px] font-medium text-[#68516A]/60">House</span>
                        </div>
                        <div className="w-full h-[1px] bg-[#F3F3F3] ">
                        </div>
                        <div onClick={() => handleSelect("Duplex")} className="w-full flex items-center justify-center h-[40px] cursor-pointer">
                            <span className="text-[16px] font-medium text-[#68516A]/60">Duplex</span>
                        </div>
                        <div className="w-full h-[1px] bg-[#F3F3F3] ">
                        </div>
                        <div onClick={() => handleSelect("Studio")} className="w-full flex items-center justify-center h-[40px] cursor-pointer">
                            <span className="text-[16px] font-medium text-[#68516A]/60">Studio</span>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}