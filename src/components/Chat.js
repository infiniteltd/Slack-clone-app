import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { collection, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

function Chat() {
    const roomId = useSelector(selectRoomId);
    console.log('roomId:', roomId);

    const roomRef = collection(db, 'rooms');
    const [roomDetails] = useDocument(
        roomId && doc(roomRef, roomId)
    );

    const messageRef = collection(db, 'rooms', roomId, 'messages');

    console.log('messageRef:', messageRef);

    const [roomMessages] = useCollection(
        roomId && query(messageRef, orderBy('timestamp', 'asc'))
    );

    console.log(roomDetails?.data());
    console.log(roomMessages);

    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#room-name</strong></h4>
                        <StarBorderOutlined />
                    </HeaderLeft>

                    <HeaderRight>
                        <p>
                            <InfoOutlined /> Details
                        </p>
                    </HeaderRight>
                </Header>

                <ChatMessages>
                    {/* List out the messages */}
                </ChatMessages>

                <ChatInput
                    // channel Name
                    channelId={roomId}
                />
            </>
        </ChatContainer>
    );
}

export default Chat;

const ChatContainer = styled.div`
flex: 0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
display: flex;
align-items: center;

> h4 {
    display:flex;
    text-transform: lowercase;
    margin-right: 10px;
}

> h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
}
`;

const HeaderRight = styled.div`
> p {
    display: flex;
    align-items: center;
    font-size: 14px;
}

> p > .MuiSvgIcon-root  {
    margin-right: 5px !important;
    font-size: 16px;
}
`;

const ChatMessages = styled.div``;