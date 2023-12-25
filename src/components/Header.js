import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { AccessTime, Search, HelpOutline } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Header() {
    const [user] = useAuthState(auth);

    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                    onClick={() => signOut(auth)}
                    src={user?.photoURL}
                    alt={user?.displayName}
                />
                <AccessTime />
            </HeaderLeft>

            <HeaderSearch>
                <input placeholder='Search krisCodesChannel' />
                <Search />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutline />
            </HeaderRight>

        </HeaderContainer>
    );
}

export default Header;


const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color: white;
`;

const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;


> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}
`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;

:hover {
    opacity: 0.8;
}
`;

const HeaderSearch = styled.div`
flex: 0.4;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
display: flex;
padding: 0 50px;
color: gray;
border: 1px gray solid;

> input {
    background-color: transparent;
    border: none;
    text-align: left;
    min-width: 30vw;
    outline: none;
    color: white;
}

> .MuiSvgIcon-root {
    text-align: right;
    margin-left: 6rem;
}
`;

const HeaderRight = styled.div`
display: flex;
flex: 0.3;
align-items: flex-end;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
}
`;