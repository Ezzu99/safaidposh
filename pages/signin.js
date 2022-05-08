import { AmplifyProvider, TabItem, Tabs, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Box } from '@mui/material';
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Login = () => {
    return (
        <AmplifyProvider>
            <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: '500px', transform: 'translate(0, -40px)' }}>
                    <Text variation='dark' fontSize='32px' textAlign='center' fontWeight='bold'>SafaidPosh</Text>
                    <Box sx={{  }}>
                        <Authenticator signUpAttributes={['email']}>
                            {({ signOut, user }) => (
                            <main>
                                <h1>Hello {user.username}</h1>
                                <button onClick={signOut}>Sign out</button>
                            </main>
                            )}
                        </Authenticator>
                    </Box>
                </Box>
            </Box>
        </AmplifyProvider>
    )
}

export default Login;