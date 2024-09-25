'use client'
import { useCallback, useState } from "react";

function useNewProperty() {

    const [name, setName] = useState('')
    const [number_of_units, setNumber_of_units] = useState(0)
    const [rental_cost, setRental_cost] = useState(0)
    const [type, settype] = useState('Property Type')


    const nameData = useCallback((state: string) => {
        setName(state);
    }, []);

    const number_of_unitsData = useCallback((state: number) => {
        setNumber_of_units(state);
    }, []);
    const rental_costData = useCallback((state: number) => {
        setRental_cost(state);
    }, []);
    const typeData = useCallback((state: string) => {
        settype(state);
    }, []);

    return { name, number_of_units, rental_cost, type, nameData, number_of_unitsData, rental_costData, typeData }

}

export default useNewProperty;