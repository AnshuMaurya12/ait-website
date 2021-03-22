import react from 'react';
import Carousel from 'react-bootstrap/Carousel'

class BootstrapSlider extends react.Component{

    render(){
        return(
            <Carousel className="w-100 h-100">
                <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="https://www.achieversit.com/assets/images/angular_training.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>ANGULAR DEVELOPMENT COURSE</h3>
                    <p>EXPLORE COURSE</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.achieversit.com/assets/images/react_training.jpg"
                    alt="Second slide"
                />
            
                <Carousel.Caption>
                    <h3>REACTJS DEVELOPMENT COURSE</h3>
                    <p>EXPLORE COURSE</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.achieversit.com/assets/images/full_stack_development.jpg"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>PYTHON DEVELOPMENT COURSE</h3>
                    <p>EXPLORE COURSE</p>
                </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.achieversit.com/assets/images/aws_training.jpg"
                    alt="fourth slide"
                />
            
                <Carousel.Caption>
                    <h3>DIGITAL MARKETING COURSE</h3>
                    <p>EXPLORE COURSE</p>
                </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.achieversit.com/assets/images/web_development.jpg"
                    alt="fivth slide"
                />
            
                <Carousel.Caption>
                    <h3>WEB DEVELOPMENT COURSE</h3>
                    <p>EXPLORE COURSE</p>
                </Carousel.Caption>
                </Carousel.Item>

             




            </Carousel>
        )
    }
    
}

export default BootstrapSlider;