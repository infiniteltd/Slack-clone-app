import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { auth } from './firebase';
import Spinner from 'react-spinkit';


function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src='https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png' alt='slack logo' />
          <Spinner
            name='ball-spin-fade-loader'
            color='purple'
            fadeIn='none'
          />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
display: grid;
place-items: center;
height: 100vh;
width: 100%;
`;

const AppLoadingContents = styled.div`
text-align: center;
padding-bottom: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> img {
  height: 100px;
  padding: 20px;
  margin-bottom: 40px;
}
`;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;