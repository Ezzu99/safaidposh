import { Box, Button, Input, TextField, Typography } from '@mui/material';
import React from 'react';

const Signup = () => {
    const [username, setusername] = React.useState();
    const [password, setpassword] = React.useState();
    const [confirmPass, setconfirmPass] = React.useState();
    const [email, setemail] = React.useState();

    return (
        <Box sx={{ width: '100%', height: '100vh', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex' }}>
                <Typography>Signup</Typography>
                <Box sx={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <TextField label='Username' />
                    <TextField label='Password' />
                    <TextField label='Confirm password' />
                    <TextField label='Email' />
                    <Button variant='contained' >Signup</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Signup;