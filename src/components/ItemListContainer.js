import Cards from './Cards';
import ItemCount from './Itemcount';
import './ItemListContainer.css';


function ItemListContainer({saludoTemp}) {
    return(
        <div className='intemlistcont'>
            <p>{saludoTemp}</p>
            <div>
            <Cards nombre='tomate' descripcion='dasdassadsf' precio='$20' />
            <Cards nombre='huevo' descripcion='dasdassadsf' precio='$20'/>
            <Cards nombre='pera' descripcion='dasdassadsf' precio='$20'/>
            <Cards nombre='auto' descripcion='dasdassadsf' precio='$20'/>
            <Cards nombre='kiwi' descripcion='dasdassadsf' precio='$20'/>
            <Cards nombre='zapato' descripcion='dasdassadsf' precio='$20'/>
            </div>
        </div>
    )
}

export default ItemListContainer;