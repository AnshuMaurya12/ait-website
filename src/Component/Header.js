import React from 'react'; 
import  {Link } from 'react-router-dom';
  
function Header (){ 
    return (

 <div>    
<nav className ="nav bar bg-dark justify-content-left">
<img src="https://www.achieversit.com/assets/images/AIT-white.jpg" alt="ait"></img> 
 </nav>   
<nav className ="nav bg-dark nav-item justify-content-end">
  <li className="nav-link">
    <Link to="Contact" className ="nav-link " >Contact Us</Link>
  </li>
  <li className="nav-link">
    <a className="nav-link" href="#">Placements Page</a>
  </li>
 

</nav>



<nav className="navbar navbar-dark">
    <div className="container-fluid">
      <button className="navbar-toggler-icon-small bg-dark" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>


      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">UI Development</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">Angular</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">React_JS</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">VUEJS</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">MEAN</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">MERN</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">Digital Marketing</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">Python</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">React_Native</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">IONIC</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">React_Native</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">Web Dev</a>
      <a className="flex-sm-fill text-justify p-0 mr-1 nav-link" href="#">Full stack</a>
    </div>
  </nav>
  
</div>
    )
} ;
  
export default Header; 
