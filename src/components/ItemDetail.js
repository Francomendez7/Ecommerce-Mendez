function ItemDetail({id, nombre, precio, img, descripcion}){
    const clickHandler = () => {
        console.log("Compra finalizada")
    };
    return(
        <div>
            <div>
                <img src={img} alt={id} />
                <div>
                    <h2>{nombre}</h2>
                    <p>{descripcion}</p>
                    <button onClick={clickHandler}>Finalizar compra</button>
                    <h3>{precio}</h3>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;