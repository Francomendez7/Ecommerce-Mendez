import { useEffect , useState } from "react"
import Cards from "./Cards"
import './Cards.css'

function ItemList(){
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => setInfo(data))
    },[])
    
    console.log(info)

    return(
        <div className="Card">
        {info && info.map(i => <Cards nombre={i.nombre} precio={i.precio} img={i.img} descripcion={i.descripcion} />)}
        </div>
    )
}

export default ItemList;