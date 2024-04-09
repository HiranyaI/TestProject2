import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './component/TopNav/TopNav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import People from './pages/People/People';
import Notification from './pages/Notifications/Notification';
import Profile from './pages/Profile/Profile';
import Messaging from './pages/Message/Messaging';
import Settings from './pages/Settings/Settings';
import FriendsPage from './pages/Friends Page/FriendsPage';

function App() {
  return (
    
      <div >
        <BrowserRouter>
        <TopNav/>

          <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/people" element={<People />}></Route>
            <Route path="/notification" element={<Notification/>}></Route>
            <Route path="/messaging" element={<Messaging/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
            <Route path='/friendPage' element={<FriendsPage/>}></Route>

          </Routes>
        </BrowserRouter>

        {/* <TopNav/>
        <Profile/> */}
        
      </div>
  );
}

export default App;
