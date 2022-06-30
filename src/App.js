import './App.css';
import Cards from './components/Cards';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludoTemp={"Lista de productos"}/>
    </div>
  )
}

export default App;