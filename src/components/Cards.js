import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Button}  from 'react-bootstrap';
import  {Card} from 'react-bootstrap';
import ItemCount from './Itemcount';

const onAdd = (quantity) => {
    console.log('compraste ${quantity} unidades')
}

function Cards (props) {
    return(
        <div>
        <Card style={{ width: '18rem'}} className='card'>
<Card.Img variant="top" src={props.img} />
<Card.Body>
    <Card.Title>{props.nombre}</Card.Title>
    <Card.Text>
    {props.descripcion}
    </Card.Text>
    <Button variant="primary">{props.precio}</Button>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
</Card.Body>
</Card>
</div>
)
}

export default Cards;