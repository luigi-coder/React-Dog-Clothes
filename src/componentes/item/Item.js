import React from "react"
import Card from "react-bootstrap/Card"
import Button from '../button/Button'

const Item = ({item}) => {
    console.log(item)
    return(
       
                <Card style={{ width: '21rem', border: '#282c34 solid 5px' }} className="col-lg-3 col-md-6 col-sm-12 card">
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body className="text-center">
                        <Card.Title>{item.nombre}</Card.Title>
                        <Card.Text style={{ width: '13rem'}}>
                            {item.descripcion}
                        </Card.Text>
                        <Button
                        contenido={`detalles`}
                        path={`/detail/${item.id}`
                        }/>
                        </Card.Body>
                </Card>
                
    )
}
export default Item;