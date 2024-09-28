'use client'
import { InputAndLabel, InputAndLabelTenants, PagesPath } from "@/components/atoms"
import { useEffect, useState } from "react"
import Image from "next/image"
import { toast } from "sonner"
import axios from "axios"
import { useNewProperty, useNewTenant } from "@/hooks"


function Tenants() {
    return (
        <div className="w-[20px] rounded-[40px] flex-1 flex flex-col items-start justify-start bg-[#FFF] gap-[20px] px-[40px] py-[23px] ">
            <PagesPath
                name="Dashboard / Tenants"
                link="/Dashboard/Tenants"
                src="/icons/ArrowLeft.svg"
                alt="ArrowLeft"
                spanClassname=" text-[#4693F8]"
            />
            <div className="w-full bg-[#F2F8FF] flex flex-col rounded-[19px] h-[500px] pt-[10px] px-[10px] gap-[20px] relative">
                <TenantsFilterAndAdd />
                <TenantsTable />
            </div>
        </div>
    )
}


export default Tenants


function TenantsTable() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/tenants/allTenants`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    })

    return (
        <div className="w-full flex flex-col">
            <TenantsTableHead />
            {data.map((item: any, index: number) => (
                <TenantsTableContent
                    key={index}
                    id={item.id}
                    name={item.name}
                    contact_details={item.contact_details}
                    section={item.section}
                    property={item.property.name}
                />
            ))}
        </div>
    )
}



function TenantsTableHead() {
    return (
        <div className="w-full flex bg-[#FFF] px-[10px] rounded-[12px] h-[50px]">
            <div className="w-[100px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Id</span>
            </div>
            <div className="w-[240px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Name</span>
            </div>
            <div className="w-[210px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Contact Details</span>
            </div>
            <div className="w-[220px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Section/Units</span>
            </div>
            <div className="w-[230px] h-full flex items-center justify-start pl-[10px]">
                <span className="text-[16px] text-[#68516A] font-medium">Property Name</span>
            </div>
            <div className="w-10 flex-1 h-full flex items-center justify-center pl-[10px] gap-1">
                <span className="text-[16px] text-[#68516A] font-medium">Edit</span>
                <span className="text-[16px] text-[#68516A] font-medium">/</span>
                <span className="text-[16px] text-[#68516A] font-medium">Remove</span>
            </div>
        </div>
    )
}


function TenantsFilterAndAdd() {

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
                <span className="text-[14px] text-[#FFF] font-semibold">Add New Tenant</span>
                <div className="relative object-cover w-[12px] h-[12px]">
                    <Image src="/icons/AddPropertyIcon.svg" alt="AddPropertyIcon" fill={true}>

                    </Image>
                </div>
            </div>
            {
                addPopUp &&
                <AddTenantPopUp setAddPopUp={setAddPopUp} />
            }
        </div>
    )
}


interface Property {
    id: number;
    name: string;
}


function AddTenantPopUp(props: any) {
    const { setAddPopUp } = props ?? {};

    const [showSelectOptions, setShowSelectOptions] = useState(false);
    const [propertiesData, setPropertiesData] = useState<Property[]>([]);
    const [propertyName, setPropertyName] = useState('Property')


    const { name, contact_details, section, propertyId, nameData, contact_detailsData, sectionData, propertyIdData } = useNewTenant();


    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/properties/allProperty`)
            .then((response) => {
                setPropertiesData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])


    function handleSave() {
        
        const data = { name: name, contact_details: contact_details, section: section, property_id: propertyId }

        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/tenants/NewTenants`, data)
            .then((response) => {
                toast.success("Tenant Added Successfully")
                setAddPopUp(false)
            })
            .catch((error) => {
                toast.error("Error When Adding Tenant")
                console.error(error);
            });
    }

    return (
        <div className="absolute w-full h-[500px] rounded-[19px] bg-[#F2F8FF] gap-[35px] flex flex-col pt-[35px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-full flex items-center justify-center">
                <span className="font-semibold text-[30px] text-[#68516A]">Add New Tenant</span>
            </div>
            <div className="w-full flex flex-col gap-[40px] relative">
                <div className="w-full flex flex-col gap-[20px]">
                    <div className="flex w-full items-center justify-center gap-[30px]">
                        <InputAndLabelTenants label={"Tenant Name"} placeholder={"Tenant Name"} classname="w-[250px] h-[48px]" nameData={nameData} type="name" />
                        <InputAndLabelTenants label={"Contact Details"} placeholder={"Email / Phone Number"} classname="w-[250px] h-[48px]" contact_detailsData={contact_detailsData} type="contact" />
                    </div>
                    <div className="flex w-full items-center justify-center gap-[30px]">
                        <InputAndLabelTenants label={"Section / Unit"} placeholder={"Section / Unit"} classname="w-[250px] h-[48px]" sectionData={sectionData} type="section" />
                        <div className="flex flex-col gap-[6px]">
                            <span className=" text-[15px] text-[#4693F8]/80 ml-[10px]">
                                Property
                            </span>
                            <div onClick={() => {
                                setShowSelectOptions(!showSelectOptions)
                            }} className="w-[250px] h-[48px] cursor-pointer pl-[24px] flex items-center relative bg-[#FFF] rounded-[13px] border border-[#F3F3F3]" >
                                <span className="font-poppins text-[#7D7D7D]/40 text-[14px] font-medium">
                                    {propertyName}
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
                        <div onClick={handleSave} className="h-full w-[100px] rounded-[11px] cursor-pointer bg-[#4693F8] px-[10px] flex items-center justify-center">
                            <span className="text-[#FFF]">Save</span>
                        </div>
                    </div>
                </div>

                {
                    showSelectOptions &&
                    <div className="w-[250px] border border-[#F3F3F3] flex flex-col absolute bottom-[45px] rounded-[13px] right-[100px] bg-[#FFF]">
                        {propertiesData.map((items, index) => (
                            <PropertiesSelection key={index} propertyName={items.name} propertyId={items.id} setShowSelectOptions={setShowSelectOptions} propertyIdData={propertyIdData} setPropertyName={setPropertyName} />
                        ))}
                    </div>
                }
            </div>

        </div>
    )
}


interface PropertiesSelectionProps {
    propertyName: string;
    propertyId: number;
    setShowSelectOptions?: any;
    propertyIdData?: any;
    setPropertyName?: any;
}

function PropertiesSelection(props: PropertiesSelectionProps) {

    const { propertyName, propertyId, setShowSelectOptions, propertyIdData, setPropertyName } = props ?? {}


    function handleClick() {
        setShowSelectOptions(false)
        propertyIdData(propertyId)
        setPropertyName(propertyName);
    }

    return (
        <div onClick={handleClick} className="flex flex-col">
            <div className="w-full flex items-center justify-center h-[40px] cursor-pointer">
                <span className="text-[16px] font-medium text-[#68516A]/60">{propertyName}</span>
            </div>
            <div className="w-full h-[1px] bg-[#F3F3F3] ">
            </div>
        </div>
    )
}



interface TenantsTableContentProps {
    id: number
    name: string
    contact_details: string
    section: string
    property?: string[]
}

function TenantsTableContent(props: TenantsTableContentProps) {

    const { id, name, contact_details, section, property } = props ?? {}
    const [showUpdate, setShowUpdate] = useState(false);


    function handleRemoveTenant() {
        const data = { id: id }
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/tenants/removeTenant`, data)
            .then((response) => {
                toast.success("Tenant removed Successfully")
            })
            .catch((error) => {
                toast.error("Error in removing Tenant")
                console.error(error);
            });
    }

    return (
        <div className="flex flex-col w-full">
            <div className="w-full flex px-[10px] rounded-[12px] h-[50px]">
                <div className="w-[100px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{id}</span>
                </div>
                <div className="w-[240px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{name}</span>
                </div>
                <div className="w-[210px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{contact_details}</span>
                </div>
                <div className="w-[220px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{section}</span>
                </div>
                <div className="w-[230px] h-full flex items-center justify-start pl-[10px]">
                    <span className="text-[16px] text-[#4693F8] font-medium">{property}</span>
                </div>
                <div className="w-10 flex-1 h-full flex justify-center items-center gap-[20px]">
                    <div onClick={() => { setShowUpdate(true) }} className="relative object-cover w-[26px] h-[26px] cursor-pointer">
                        <Image src="/icons/EditPropertyIcon.svg" alt="EditPropertyIcon" fill={true}>

                        </Image>
                    </div>
                    <div onClick={handleRemoveTenant} className="relative object-cover w-[26px] h-[26px] cursor-pointer">
                        <Image src="/icons/RemovePropertyIcon.svg" alt="RemovePropertyIcon" fill={true}>
                        </Image>
                    </div>
                </div>
            </div>
            <TenantsTableSeparator />

            {showUpdate &&

                <div className="absolute h-[500px]  w-full bg-[#F2F8FF] top-0">
                    <UpdateInfoPopUp setShowUpdate={setShowUpdate} nameProps={name} contact_detailsProps={contact_details} sectionProps={section} propertyProps={property} id={id} />
                </div>
            }
        </div>
    )
}

function TenantsTableSeparator() {
    return (
        <div className="w-full flex items-center justify-center px-[20px] ">
            <div className="bg-[#68516A] h-[1px] w-full">

            </div>
        </div>
    )
}


interface updateInfoPopUpProps {
    setShowUpdate?: any;
    nameProps: string;
    contact_detailsProps: string;
    sectionProps: string;
    propertyProps: any;
    id: number;
}


function UpdateInfoPopUp(props: updateInfoPopUpProps) {


    const { setShowUpdate, nameProps, contact_detailsProps, sectionProps, propertyProps, id } = props ?? {}
    const { name, contact_details, section, propertyId, nameData, contact_detailsData, sectionData, propertyIdData } = useNewTenant();

    const [showSelectOptions, setShowSelectOptions] = useState(false);
    const [propertiesData, setPropertiesData] = useState<Property[]>([]);
    const [propertyName, setPropertyName] = useState(propertyProps)


    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/properties/allProperty`)
            .then((response) => {
                setPropertiesData(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    function handleSave() {
        const data = { name: name, contact_details: contact_details, section: section, property_id: propertyId, id: id }
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/tenants/UpdateTenants`, data)
            .then((response) => {
                toast.success("Tenant Added Successfully")
                setShowUpdate(false)
            })
            .catch((error) => {
                toast.error("Error When Adding Tenant")
                console.error(error);
            });
    }

    return (
        <div className="w-full h-full flex flex-col gap-[40px] relative pt-[25px]">
            <div className="w-full flex items-center justify-center">
                <span className="font-semibold text-[30px] text-[#68516A]">Update Tenant information</span>
            </div>
            <div className="w-full flex flex-col gap-[20px]">
                <div className="flex w-full items-center justify-center gap-[30px]">
                    <InputAndLabelTenants label={"Tenant Name"} placeholder={nameProps} classname="w-[250px] h-[48px]" nameData={nameData} type="name" />
                    <InputAndLabelTenants label={"Contact Details"} placeholder={contact_detailsProps} classname="w-[250px] h-[48px]" contact_detailsData={contact_detailsData} type="contact" />
                </div>
                <div className="flex w-full items-center justify-center gap-[30px]">
                    <InputAndLabelTenants label={"Section / Unit"} placeholder={sectionProps} classname="w-[250px] h-[48px]" sectionData={sectionData} type="section" />
                    <div className="flex flex-col gap-[6px]">
                        <span className=" text-[15px] text-[#4693F8]/80 ml-[10px]">
                            Property
                        </span>
                        <div onClick={() => {
                            setShowSelectOptions(!showSelectOptions)
                        }} className="w-[250px] h-[48px] cursor-pointer pl-[24px] flex items-center relative bg-[#FFF] rounded-[13px] border border-[#F3F3F3]" >
                            <span className="font-poppins text-[#7D7D7D]/40 text-[14px] font-medium">
                                {propertyName}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full items-end justify-center gap-[30px]">
                <div className="w-[250px] h-[40px] flex gap-[10px]">
                    <div onClick={() => { setShowUpdate(false) }} className="h-full w-[100px] rounded-[11px] cursor-pointer bg-[#cfcece] px-[10px] flex items-center justify-center">
                        <span className="text-[#FFF]">Cancel</span>
                    </div>
                    <div onClick={handleSave} className="h-full w-[100px] rounded-[11px] cursor-pointer bg-[#4693F8] px-[10px] flex items-center justify-center">
                        <span className="text-[#FFF]">Save</span>
                    </div>
                </div>
            </div>

            {
                showSelectOptions &&
                <div className="w-[250px] border border-[#F3F3F3] flex flex-col absolute top-[235px] rounded-[13px] right-[100px] bg-[#FFF]">
                    {propertiesData.map((items, index) => (
                        <PropertiesSelection key={index} propertyName={items.name} propertyId={items.id} setShowSelectOptions={setShowSelectOptions} propertyIdData={propertyIdData} setPropertyName={setPropertyName} />
                    ))}
                </div>
            }
        </div>
    )
}