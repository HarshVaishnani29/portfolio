
import './App.css';
import Header from './Components/Header/Header';
import Aboutus from './Components/About Us/Aboutus';
import Resume from './Components/Resume/Resume';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimoniol from './Components/Testimonal/Testimoniol';
import Contact from './Components/Contact us/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';

function App() {
  return (
    <>
    <Header/>
    <Intro/>
    <Aboutus/>
    <Resume/>
    <Services/>
    <Portfolio/>
    <Testimoniol/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
