import React from 'react';
import olograma from '../../img/olograma.png'
import webpage from '../../img/webpage.png'
import asesor from '../../img/asesor.png'
import smartphone from '../../img/smartphone.png'
import ajustes from '../../img/ajustes.png'
import './ologramas.css'


const Olograma = ({titulito})=> {
    return (
        <div>
            <h1 className="text-center text-cyan">{titulito}</h1>
            <main className="container-fluid center">
                <div className=" row ologramitas">
                    <div className="col-xl-3 col-lg-6 col-md-6 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={webpage} alt="webpage"></img>
                            <img className="olograma" src={olograma} alt ="olograma"></img>
                            <h5 className="text-cyan">Diseño y desarrollo web</h5>
                            <p className="text-cyan parrafito">Entendemos que una página web es, en el ambiente digital, la cara de una empresa. Por lo que nosotors Diseñamos y desarrollamos nuestras páginas web según las especificaciones de nuestros clientes, para que cada página no sólo se ajuste a las necesidades, sino que también a la visión que tengan de las mismas.</p>               
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={asesor} alt="webpage"></img>
                            <img className="olograma" src={olograma} alt ="olograma"></img>
                            <h5 className="text-cyan">Asesoramiento permamente</h5>
                            <p className="text-cyan">En todos los planes contás con asesoramiento por parte de nuestros especialistas en diseño para que no sólo obtengas lo que estás buscando sino también aquello que no esperabas.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={smartphone} alt="webpage"></img>
                            <img className="olograma" src={olograma} alt ="olograma"></img>
                            <h5 className="text-cyan">Webs 100% responsive</h5>
                            <p className="text-cyan">Nuestras web son 100% responsive, esto significa que puedes visualisarlas tanto de celulares como de computadoras e incluso tablets.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 ologram">
                        <div className="imagen mar-left">
                            <img className="servicio" src={ajustes} alt="webpage"></img>
                                <img className="olograma" src={olograma} alt ="olograma"></img>
                                <h5>Mantenimiento y soporte</h5>
                                <p className="text-cyan">Todos nuestros clientes cuentan con el servicio de mantenimiento y soporte técnico permamente en caso de cualquier falla o cambio que quiera realizar a su página web luego de que ya esté en línea.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Olograma;