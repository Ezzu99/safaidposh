import { Button, PasswordField, TextField } from '@aws-amplify/ui-react';
import React from 'react';

const SignupForm = () => {
    const [username, setusername] = React.useState();
    const [password,setpassword] = React.useState();
    const [email, setemail] = React.useState();

    const handleSubmit = () => {
        console.log(username, password, email);
    }

    return (
        <>
            <TextField placeholder='Username' onChange={(e) => setusername(e.target.value)}/>
            <PasswordField name='password' placeholder='Password' onChange={(e) => setpassword(e.target.value)}/>
            <TextField placeholder='Email' onChange={(e) => setemail(e.target.value)}/>
            <Button width='100%' marginTop='8px' onClick={handleSubmit}>Create Account</Button>
        </>
    )
}

export default SignupForm;