import React from 'react';
import olograma from '../../img/olograma.png'
import emma1 from '../../img/3mma1.jpg'
import emma2 from '../../img/3mma2.jpg'
import emma3 from '../../img/3mma3.jpg'
import emma4 from '../../img/3mma4.jpg'
import './ologramas.css'


const Olograma = ({titulito})=> {
    return (
        <div>
            <h1 className="text-center text-cyan">{titulito}</h1>
            <main className="container-fluid center">
                <div className="row ologramitas">
                    <div className="col-xl-3 col-lg-6 col-md-6 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={emma1} alt="webpage"></img>
                            <img className="olograma" src={olograma} alt ="olograma"></img>
                            <h5 className="text-cyan">Lorem ipsum dolor</h5>
                            <p className="text-cyan parrafito"> </p>               
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={emma2} alt="webpage"></img>
                            <img className="olograma" src={olograma} alt ="olograma"></img>
                            <h5 className="text-cyan">Lorem ipsum dolor</h5>
                            <p className="text-cyan"></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={emma3} alt="webpage"></img>
                            <img className="olograma" src={olograma} alt ="olograma"></img>
                            <h5 className="text-cyan">Lorem ipsum dolor</h5>
                            <p className="text-cyan"></p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={emma4} alt="webpage"></img>
                                <img className="olograma" src={olograma} alt ="olograma"></img>
                                <h5>Lorem ipsum dolor</h5>
                                <p className="text-cyan"></p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Olograma;