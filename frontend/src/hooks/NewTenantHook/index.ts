'use client'
import { useCallback, useState } from "react";


function useNewTenant() {
    const [name, setName] = useState('')
    const [contact_details, setContact_details] = useState('')
    const [section, setSection] = useState('')
    const [propertyId, setPropertyId] = useState(0)


    const nameData = useCallback((state: string) => {
        setName(state);
    }, []);
    const contact_detailsData = useCallback((state: string) => {
        setContact_details(state);
    }, []);
    const sectionData = useCallback((state: string) => {
        setSection(state);
    }, []);
    const propertyIdData = useCallback((state: number) => {
        setPropertyId(state);
    }, []);


    return { name, contact_details, section, propertyId, nameData, contact_detailsData, sectionData, propertyIdData }

}
export default useNewTenant




