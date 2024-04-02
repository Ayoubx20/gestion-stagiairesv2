import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Signup from './Signup';
import Accueil from './accuel';
import Navbar from './nav/navbar';
import Sbar from './nav/Sbar';
import UserList from './stag/UsserList';
import AddUsser from './stag/AddUsser';
import UpdateUser from './stag/UpdateUsser';
import Logi from './AdminSta';
import LoginAdmin from './Adminv';
import SignupAdmin from './signupAdmin';
import UserListAD from './stag/UsserListAdmin';
import SbarAd from './nav/SbarAD';
import Contact from './stag/contact';
import Footer from './foote/footer';

export default function App() {
  
  return (
    <>
    <Router>
      <Routes> 
        <Route path="/login" element={<Login />} />
        <Route path="/Footer" element={<Footer />}/>
        <Route path="/UserList" element={<UserList />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/AddUsser" element={<AddUsser/>}></Route>
        <Route path="/UpdateUser/:id" element={<UpdateUser/>}></Route>
        <Route path="/" element={<Accueil />} />
        <Route path="/Logi" element={<Logi />} />
        <Route path="/LoginAdmin" element={<LoginAdmin/>} />
        <Route path="/SignupAdmin" element={<SignupAdmin/>} />
        <Route path="/UserListAD" element={<UserListAD/>} />
        <Route path="/SbarAd" element={<SbarAd/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Sbar" element={<Sbar />}> </Route>
        <Route path="/Navbar" element={<Navbar />} />
        {/* Wildcard route to redirect to Accueil */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
     <Footer/>
     </>
  );
}
