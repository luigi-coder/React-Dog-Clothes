import Item from "../item/Item"
import CardDeck from "react-bootstrap/CardDeck"

const ItemList = (items)=> {
    return(
        <CardDeck>
            {
                items.map((item, index) => {
                    return <Item item={item} key={index}/>
                })
            }
        </CardDeck>
    )
}
export default ItemList;