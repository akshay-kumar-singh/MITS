import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseEvent from "./pages/ChooseEvent";
import WeddingEvent from "./pages/WeddingEvent";
import BirthdayEvent from "./pages/BirthdayEvent";
import CardleEvent from "./pages/CardleEvent";
import CollegeFest from "./pages/CollegeFest";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/choose-event" element={<ChooseEvent />} />
        <Route path="/wedding-event" element={<WeddingEvent/>}/>
        <Route path="/birthday-event" element={<BirthdayEvent/>}/>
        <Route path="/cardle-event" element={<CardleEvent/>}/>
        <Route path="/college-event" element={<CollegeFest/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
