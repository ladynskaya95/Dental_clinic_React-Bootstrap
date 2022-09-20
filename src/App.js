import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About";
import AllServices from "./pages/AllServices";
import Contacts from './pages/Contacts';
import Store from './pages/Store';


function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
