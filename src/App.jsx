import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Works from './components/Works';
import Teams from './components/Teams';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';



function App() {

  return (
        <div className='App'>
          <header id='header'>
            <Header/>
          </header>
          <main>
            <Hero/>
            <AboutUs/>
            <Services/>
            <Works/>
            <Teams/>
            <Testimonials/>
            <Pricing/>
            <Blog/>
            <ContactUs/>
            <Footer/>
          </main>
        </div>
  )
}

export default App;
