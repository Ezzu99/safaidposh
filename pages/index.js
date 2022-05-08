import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
    const router = useRouter();
	const { user } = useAuthenticator((context) => [context.user]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(user);
            if (user) {
                router.replace('/dashboard');
            } else {
                router.replace('/welcome');
            }
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress size={80}/>
        </Box>
    );
}

export default Index;
