import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludoTemp={"Lista de productos cards"}/>
    </div>
  )
}

export default App;