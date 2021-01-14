import Item from "../item/Item"
//import CardDeck from "react-bootstrap/CardDeck"

const ItemList = ({items})=> {
    
    return(
        <div className="container mb-5 text-center">
        
            <div className="row">
                {
                    items.map((item, index) => {
                        return <Item item={item} key={index}/>
                    })
                }
            </div>
        </div>
    )
}
export default ItemList;