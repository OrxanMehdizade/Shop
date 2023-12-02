import './App.css';
import { Routes, Route} from 'react-router-dom';
import ShopShow from './Components/ShopShow'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ShopShow />} />
      </Routes>
    </div>
  );
}

export default App;
