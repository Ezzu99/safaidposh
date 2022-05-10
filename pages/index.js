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
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', gap: '18px', justifyContent: 'center', alignItems: 'center' }}>
            <Typography color={'teal'} fontWeight={"bold"} variant="h3">
				<Typography component="span" fontSize={"1.2em"} fontWeight={"bold"}>S</Typography>AFAID<Typography component="span" fontSize={"1.2em"} fontWeight={"bold"}>P</Typography>OSH
			</Typography>
			<CircularProgress size={60} style={{'color': 'teal'}}/>
        </Box>
    );
}

export default Index;
