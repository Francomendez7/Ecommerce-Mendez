import './Cards.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Button}  from 'react-bootstrap';
import  {Card} from 'react-bootstrap';
import ItemCount from './Itemcount';
import Item from './Item';

const onAdd = (number) => {
    console.log('compraste ${number} unidades')
}

function Cards (props) {
    return(
        <div>
        <Card style={{ width: '14rem'}}>
<Card.Img variant="top" src={props.img} />
<Card.Body>
    <Card.Title>{props.nombre}</Card.Title>
    <Card.Text>
    {props.descripcion}
    </Card.Text>
    <Button variant="primary">{props.precio}</Button>
    <Item/>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
</Card.Body>
</Card>
</div>
)
}

export default Cards;