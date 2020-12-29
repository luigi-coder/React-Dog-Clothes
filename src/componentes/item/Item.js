import React from "react"
import Card from "react-bootstrap/Card"
import Button from '../button/Button'

const Item = ({item}) => {
    console.log(item)
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                {item.descripcion}
                </Card.Text>
                <Card.Text>
                {item.precio}
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