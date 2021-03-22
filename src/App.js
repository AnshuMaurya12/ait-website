import './App.css';
import {  BrowserRouter , Route, Switch,Link } from 'react-router-dom'; 

import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import FooterPage from './Component/Footer';
//import Welcome from './Component/Welcome'
import Error from './Component/Error';
import BootstrapSlider from './Component/Carousel';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Component/Welcome';


// import Functional from './Component/Functional';
// import Welcome from './Component/Welcome';
// import World from './Component/World'

function App() {
  return (
    <div className="App">
  
{/*       
    <Functional/>
    <Welcome/>
    <World/> */}
  
    <BrowserRouter>
    
    <Switch>
    <Route exact path = "/"> <Header/><BootstrapSlider/> <br/><br/> <br/><FooterPage/></Route>
    <Route path ="/contact" ><Header/><Contact/> </Route>
    <Route exact path ="/footer" ><FooterPage/> </Route>
    <Route exact path ="/header" ><FooterPage/> </Route>
    <Route path ="/about" component = {About} />
    <Route path ="/welcome" component = {Welcome} />


    <Route><Error/></Route>

    </Switch>
    </BrowserRouter> 
    </div>
  );
}

export default App;
