import { Button, TextField, PasswordField } from '@aws-amplify/ui-react';
import React from 'react';

const SigninForm = () => {
    const [username, setusername] = React.useState();
    const [password, setpassword] = React.useState();

    const handleSubmit = () => {
        console.log(username, password);
    }

    return (
        <>
            <TextField placeholder='Username' onChange={(e) => setusername(e.target.value)}/>
            <PasswordField name='password' placeholder='Password' onChange={(e) => setpassword(e.target.value)}/>
            <Button width='100%' marginTop='8px' onClick={handleSubmit}>Sign in</Button>
        </>
    )
}

export default SigninForm;