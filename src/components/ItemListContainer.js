import Cards from './Cards';
import ItemCount from './Itemcount';
import ItemList from './ItemList';
import './ItemListContainer.css';


function ItemListContainer({saludoTemp}) {
    return(
        <div className='intemlistcont'>
            <p>{saludoTemp}</p>
            <div>
            <ItemList/>
            </div>
        </div>
    )
}

export default ItemListContainer;