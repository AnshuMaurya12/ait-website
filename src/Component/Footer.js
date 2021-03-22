import React from 'react';
import "../asserts/style/Footer.css";
import { Col, Container, Row, Footer,Link } from 'mdbreact';


export class FooterPage extends React.Component {
    render() {
        return (
            <Footer className="page-footer font-small pt-2 mt-4 text-white" id="box1">
                <Container className="text-left">
                    <Row>
                        <Col md="3">
                            
                            <img src="https://www.achieversit.com/assets/images/AIT-white.jpg" alt="ait"></img>
                            <p>
                             <span>AchieversIT -  provides  a wide group  <br/>
                                    of opportunities &nbsp;  for  freshers &nbsp; and <br/>
                                   Experienced candidate who can  develop <br/>
                                    their skills &nbsp; and  build &nbsp;their career  <br/>
                                   opportunities  across multiple Companies..
                        </span> </p></Col>
                        <hr className="clearfix w-50 d-md-none" />
                        
                        <Col md="3">
                        <h5 className="text-uppercase mb-4 mt-3 ml-4 font-weight-bold " >Company</h5>
                            <ul className="list-styled" id="box2">
                                <li><a href="#!">&nbsp; &nbsp;Home</a></li>
                                <li><a href="#!">&nbsp; &nbsp;Placements</a></li>
                                <li><a href="#!">&nbsp; &nbsp;Coperate Taining</a></li>
                               <li><Link to="Contact">Contact Us</Link></li> 
                            </ul>
                        </Col>
                        
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="3">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Trending Course</h5>
                            <ul className="list-styled">
                                <li><a href="#!">Ui Development Course</a></li>
                                <li><a href="#!">AngularJs Course</a></li>
                                <li><a href="#!">ReactJs Course</a></li>
                                <li><a href="#!">Digital Marketing Course</a></li>
                                <li><a href="#!">Pyhton Course</a></li>

                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="3">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">CONTACT</h5>
                            <ul className="list-unstyled">
                                <li><img src= "https://cdn3.vectorstock.com/i/1000x1000/33/32/location-icon-map-address-geographical-position-vector-29053332.jpg" alt="img" width ="20px" height="20px"/>
                                #272, 6th Main, Next to Preksha Montessori , 1st Floor, 
                                BTM 2nd Stage, Bangalore, India - 560076</li><br></br>
                                <li><img src= "https://cdn1.vectorstock.com/i/1000x1000/81/55/phone-icon-in-black-and-white-telephone-symbol-vector-22968155.jpg" alt="img" width ="20px" height="20px"/>
                                   &nbsp; India : +91 8431-040-457</li><br/>
                                <li><img src="https://www.clipartkey.com/mpngs/m/94-943886_gmail-logo-vector-png-clipart-png-download-blue.png" alt="email" width= "20px" height= "20px"/>&nbsp;info@achieversit.com</li>
                            
                            </ul>
                        </Col>
                    </Row>
               

                </Container>
                <hr />
                <hr style = {{border :"1px solid white" , margin : "50px"}}/>
                <div className="text-center py-3">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item"> <Link to = "Contact">
                        Sign up! </Link></li>
                    </ul>
                </div>
                <hr />
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><i className="fa fa-facebook"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
