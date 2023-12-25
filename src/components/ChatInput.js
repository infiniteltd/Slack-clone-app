import React, { useState } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth, serverTimestamp } from '../firebase';

function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = async (e) => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        const messageRef = collection(db, 'rooms', channelId, 'messages');

        await addDoc(messageRef, {
            message: input,
            timestamp: serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        });

        chatRef?.current?.scrollIntoView({
            behavior: 'smooth',
        });

        setInput(''); // Clears the input after sending the message
    };

    return (
        <ChatInputContainer>
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;