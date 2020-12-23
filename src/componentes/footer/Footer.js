import React from "react"
import './footer.css'



const Footer = ({titulo,subtitulo})=> {
    //render(props){
        
        return(
        <div className="footer">
            <h3>{titulo}</h3>
            <h5>{subtitulo}</h5>
            <h6> © Copyright 2020 - Luis Salinas</h6>
        </div>
        )
    //}
}

export default Footer;
