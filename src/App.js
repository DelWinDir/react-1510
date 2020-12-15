import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Services from './components/Services';
import Parallax from './components/Parallax';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Work from './components/Work';
import Pal from './components/Pal';
import About from './components/About';
import Team from './components/Team';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Header />
          <Slider />
          <Route exact path="/" component={()=><div>
            <Services />
            <Testimonials />
          </div>}/>
          <Route exact path="/pricing" component={()=><div>
              <Products />
          </div>}/>
          <Route exact path="/about" component={()=><div>
              <Pal />
              <About />
              <Parallax />
          </div>}/>
          <Work />
          <Team />
          <Clients />
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;