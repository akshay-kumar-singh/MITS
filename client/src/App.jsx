import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ChooseEvent from "./pages/ChooseEvent";
import WeddingEvent from "./pages/WeddingEvent";
import BirthdayEvent from "./pages/BirthdayEvent";
import CardleEvent from "./pages/CardleEvent";
import CollegeFest from "./pages/CollegeFest";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import CorporateEvent from "./pages/CorporateEvent";
import HouseEvent from "./pages/HouseEvent";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/choose-event" element={<ChooseEvent />} />
        <Route path="/wedding-event" element={<WeddingEvent/>}/>
        <Route path="/birthday-event" element={<BirthdayEvent/>}/>
        <Route path="/cardle-event" element={<CardleEvent/>}/>
        <Route path="/college-event" element={<CollegeFest/>}/>
        <Route path="/corporate-event" element={<CorporateEvent/>}/>
        <Route path="/house-event" element={<HouseEvent/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
;
