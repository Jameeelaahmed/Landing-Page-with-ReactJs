import IntroPage from "./Components/IntroPage/IntroPage";
import OurWork from "./Components/OurWork/OurWork";
import "./App.css";
import pic from './assets/pic.jpg'
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Services from "./Components/Servic/Services";
import ContactUs from "./Components/ContactUs/ContactUs";
import * as FaIcons from 'react-icons/fa6';
import Portfolio from "./Components/Portfolio/Portfolio";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import SecondaryComponent from "./Components/SecondaryComponent/SecondaryComponent";
import Footer from "./Components/Footer/Footer";
import { Link } from "react-scroll";

function App() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(true); // Open sidebar
  }

  function closeSidebar() {
    setSidebar(false); // Close sidebar
  }

  return (
    <>
      <div className="header">
        <img src="./assets/pic.jpg" alt="Logo"></img>
        <div className="list">
          <Link to="intro" smooth={true} duration={500}>الرئيسية</Link>
          <Link to="work" spy={true} smooth={true} duration={500}>
            <a> أخر الاعمال</a>
          </Link>
          <a>من نحن</a>
          <a>خدماتنا</a>
          <a>معرضنا</a>
          <a>تواصل معنا</a>
        </div>
        <div className="left">
          <p>تواصل معنا</p>
          <FaIcons.FaList onClick={showSidebar} />
        </div>
      </div>

      {sidebar && <Sidebar isOpen={sidebar} closeSidebar={closeSidebar} />}

      <IntroPage id="intro" />
      <OurWork id="work" />
      <div>
        <img src={pic} alt="" className="pic" />
      </div>
      <WhoWeAre />
      <Services />
      <ContactUs />
      <Portfolio />
      <SecondaryComponent />
      <Footer />

      {/* Back to Top Button */}
      <Link to="intro" smooth={true} duration={500} className="back-to-top">
        <FaIcons.FaArrowUp className="back_icon" />
      </Link>
    </>
  );
}

export default App;
