import Item from "../item/Item"
//import CardDeck from "react-bootstrap/CardDeck"

const ItemList = ({items})=> {
    
    return(
        <div>
            {
                items.map((item, index) => {
                    return <Item item={item} key={index}/>
                })
            }
        </div>
    )
}
export default ItemList;