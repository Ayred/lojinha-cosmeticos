import './App.css';
import Header from './components/header/Header.jsx';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Products />
    </div>
  );
}

export default App;
