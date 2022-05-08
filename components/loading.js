import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LoadingPage = () => {
    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ color: 'teal' }}>Loading...</Typography>
        </Box>
    )
}

export default LoadingPage;