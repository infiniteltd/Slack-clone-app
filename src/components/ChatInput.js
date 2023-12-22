import React, { useState } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { addDoc, collection } from 'firebase/firestore';
import { db, serverTimestamp } from '../firebase';

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');
    const colRef = collection(db, 'rooms');

    const sendMessage = async (e) => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        await addDoc(collection(colRef, channelId, 'messages'), {
            message: input,
            timestamp: serverTimestamp(),
        });

        setInput(''); // Clears the input after sending the message
    };

    return (
        <ChatInputContainer>
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #ROOM`}
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