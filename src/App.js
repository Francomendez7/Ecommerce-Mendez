import './App.css';
import Cards from './components/Cards';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludoTemp={"Lista de productos"}/>
      <ItemDetailContainer />
    </div>
  )
}

export default App;