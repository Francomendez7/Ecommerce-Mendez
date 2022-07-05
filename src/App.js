import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer saludoTemp={"Lista de productos"}/>} />
      <Route path="/" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;