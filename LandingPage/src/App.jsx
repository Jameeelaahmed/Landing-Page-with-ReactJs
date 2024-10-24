import IntroPage from "./Components/IntroPage/IntroPage";
import OurWork from "./Components/OurWork/OurWork";
import "./App.css";
import pic from './assets/pic.jpg'
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Services from "./Components/Servic/Services";
import ContactUs from "./Components/ContactUs/ContactUs";
import * as FaIcons from 'react-icons/fa6'
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  // State to hold the SVG path


  return (
    <>
      <div className="header">
        <img src="" alt="Logo"></img>
        <div className="list">
          <a>الرئيسية</a>
          <a>من نحن</a>
          <a>خدماتنا</a>
          <a>معرضنا</a>
          <a>أخر الاعمال</a>
          <a>تواصل معنا</a>
        </div>
        <div>
          <p>تواصل معنا</p>
          <FaIcons.FaList />
        </div>
      </div>
      <IntroPage />
      <OurWork />
      <div>
        <img src={pic} alt="" className="pic" />
      </div>
      <WhoWeAre />
      <Services />
      <ContactUs />
      <Portfolio />
    </>
  );
}

export default App;
