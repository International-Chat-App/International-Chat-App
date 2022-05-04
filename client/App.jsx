import React, { Component, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MainPage from './pages/MainPage';


const App = () => {
  // userInfo will contain the username, password, preferredLanguage
  const [state, setState] = useState({
    isLoggedIn: false,
    user_id: null,
    username: null,
    language: null,
    chats: [], // array 
    messages: [{created_by: 'myles', created_at: 'today', text: 'hello'}],
    friend_language: null,
    current_room_id: null
  });

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage state={state} setState={setState} />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/main' element={<MainPage state={state} setState={setState} />} />
      </Routes>
    </Router>
  );
}

export default App;