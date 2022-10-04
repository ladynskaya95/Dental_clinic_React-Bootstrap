import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/App.scss";
import "../node_modules/leaflet/dist/leaflet.css";

import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About";
import AllServices from "./pages/services/AllServices";
import Contacts from './pages/Contacts';
import Store from './pages/store/Store';
import Callback from "./components/Callback";
import FirstAppointment from "./pages/services/FirstAppointment";
import Aesthetics from "./pages/services/Aesthetics";
import OralHygiene from "./pages/services/OralHygiene";
import Children from "./pages/services/Children";
import ToothDecay from "./pages/services/ToothDecay";
import Occlusion from "./pages/services/Occlusion";
import Implantation from "./pages/services/Implantation";
import Surgery from "./pages/services/Surgery";
import Endodontics from "./pages/services/Endodontics";
import Perio from "./pages/services/Perio";
import Catalog from "./pages/store/Catalog";

import AppContext from "./AppContext";

import { ReactComponent as Twitter } from "./svg/twitter.svg";
import { ReactComponent as Whatsapp } from "./svg/whatsapp.svg";
import { ReactComponent as Facebook } from "./svg/facebook.svg";
import { ReactComponent as Instagram } from "./svg/instagram.svg";

function App() {
  const [show, setShow] = useState(false);

  const links = [
    { id: 1, page: <Twitter />, href: "https://twitter.com/" },
    { id: 2, page: <Whatsapp />, href: "https://web.whatsapp.com/" },
    { id: 3, page: <Facebook />, href: "https://www.facebook.com/" },
    { id: 4, page: <Instagram />, href: "https://www.instagram.com/" },
  ];

  return (
    <AppContext.Provider value={{ show, setShow, links }}>
      <div className="App container-fluid">
        <Header />
        <Callback />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/*" element={<AllServices />}>
            <Route path="first_appointment" element={<FirstAppointment />} />
            <Route path="aesthetics" element={<Aesthetics />} />
            <Route path="oralHygiene" element={<OralHygiene />} />
            <Route path="children" element={<Children />} />
            <Route path="toothDecay" element={<ToothDecay />} />
            <Route path="occlusion" element={<Occlusion />} />
            <Route path="implantation" element={<Implantation />} />
            <Route path="surgery" element={<Surgery />} />
            <Route path="endodontics" element={<Endodontics />} />
            <Route path="perio" element={<Perio />} />
          </Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
