import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/App.scss";
import "../node_modules/leaflet/dist/leaflet.css";

import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About";
import AllServices from "./pages/services/AllServices";
import Contacts from './pages/Contacts';
import Store from './pages/Store';
import Callback from "./components/Callback";
import FirstAppointment from "./pages/services/FirstAppointment";

import AppContext from "./AppContext";

function App() {
  const [show, setShow] = useState(false);

  return (
    <AppContext.Provider value={{ show, setShow }}>
      <div className="App container-fluid">
        <Header />
        <Callback />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/*" element={<AllServices />} />
          {/* <Route
            path="/services/first_appointment"
            element={<FirstAppointment />}
          /> */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
