import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import imagen1 from '../../img/imagen1.png'
import imagen2 from '../../img/imagen2.png'
import imagen3 from '../../img/imagen3.png'
import './slider.css'

class Slider extends React.Component {

    

    render() {
        
        return (
            <div>
                
                    <Carousel>
                        <Carousel.Item className="slider pb-4">
                            <img className="d-block w-100" src={imagen1} alt="First slide"/>
                            {/* <Carousel.Caption>
                                <div className="Presentacion">
                                <h3 class="Presentacion">Hola, Soy {nombre}</h3>
                                <p className="text-cyan">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className="slider">
                            <img className="d-block w-100" src={imagen2} alt="Third slide"/>
                            {/* <Carousel.Caption>
                                <div className="Presentacion">
                                <h3 class="Presentacion">Hola, Soy {nombre}</h3>
                                <p className="text-cyan">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className="slider">
                            <img className="d-block w-100" src={imagen3} alt="Third slide"/>
                            {/* <Carousel.Caption>
                                <div className="Presentacion">
                                <h3 >Hola, Soy {nombre}</h3>
                                <p className="text-cyan">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </div>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                    
                    
            </div>
        )
    }
}
export default Slider;

/*const Slider = ()=> {
    
    return (
        <div>
            <Carousel>
            <Carousel.Item style={{height:"1000px"}}>
                <img className="d-block w-100" src={imagen1} alt="First slide"/>
                <Carousel.Caption>
                <h3 style={{color:'red'}}>Hola, Soy {nombre}</h3>
                <p className="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:"1000px"}}>
                <img className="d-block w-100" src={imagen2} alt="Third slide"/>
                <Carousel.Caption>
                <h3 style={{color:'red'}}>Hola, Soy {nombre}</h3>
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:"1000px"}}>
                <img className="d-block w-100" src={imagen3} alt="Third slide"/>
                <Carousel.Caption>
                <h3 style={{color:'red'}}>Hola, Soy {nombre}</h3>
                <p className="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Slider;*/
