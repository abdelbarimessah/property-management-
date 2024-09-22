'use client';
import { useCallback, useState } from 'react';

function useSignInHook() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameData = useCallback((state: string) => {
        setUsername(state);
    }, []);
    const passwordData = useCallback((state: string) => {
        setPassword(state);
    }, []);

    return {
        username, usernameData, password, passwordData
    };
}

export default useSignInHook;


