import './Welcome.css';

function Welcome({nombreUsuario}) {
    return(
        <div className='bienvenida'>
            Bienvenida/o {nombreUsuario}
        </div>
    )
}

export default Welcome;