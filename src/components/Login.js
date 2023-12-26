import React from 'react';
import styled from 'styled-components';
import { Button } from "@mui/material";
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import slackLogo from '../assests/slackLogo.png';

function Login() {

    const signInHandler = (e) => {
        e.preventDefault();

        signInWithPopup(auth, provider).catch(error => alert(error.message));
    };

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img
                    src={slackLogo}
                    alt='slack logo'
                />
                <h1>Sign in to the Slack Channel</h1>
                <p>kriscodes.slack.com</p>

                <Button type="submit" onClick={signInHandler}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    );
}

export default Login;

const LoginContainer = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;
`;

const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

> img {
    object-fit: contain;
height: 100px;
margin-bottom: 40px;
}

> button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
}
`;
