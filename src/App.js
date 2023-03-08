import React from "react";
import HomePage from "./component/Home";
import NavbarSection from "./component/Navbar";
import Signup from "./component/Signup";
import LoginForm from "./component/LoginForm";
import Footer1 from "./component/Footer";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <> <NavbarSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer1 />

    </>

  );
}

export default App;
