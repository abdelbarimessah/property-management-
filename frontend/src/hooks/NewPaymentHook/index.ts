'use client'
import { useCallback, useState } from "react";

function useNewPayment() {

    const [amount, setAmount] = useState(0);
    const [payment_date, setPayment_date] = useState('')
    const [tenant_id, setTenant_id] = useState(0);
    const [settled, setSettled] = useState(false)

    const amountData = useCallback((state: number) => {
        setAmount(state);
    }, []);
    const settledData = useCallback((state: boolean) => {
        setSettled(state);
    }, []);
    const payment_dateData = useCallback((state: string) => {
        setPayment_date(state);
    }, []);
    const tenant_idData = useCallback((state: number) => {
        setTenant_id(state);
    }, []);

    return {settled, amount, payment_date, tenant_id, amountData, payment_dateData, tenant_idData , settledData}
}

export default useNewPayment;