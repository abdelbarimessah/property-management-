'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

function useUserData() {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/me`);
                setUsername(response.data.username);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsername();
    }, []);

    return {
        username,
        loading,
    };
}

export default useUserData;