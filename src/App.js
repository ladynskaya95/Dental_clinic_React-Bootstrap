import "./scss/App.scss";

import Header from "./components/Header";
import PrevContent from "./components/PrevContent";
import AboutContent from "./components/AboutContent"
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <PrevContent />
      <AboutContent />
      <Services />
      <Achievements/>
      <Footer/>
    </div>
  );
}

export default App;
