import logo from './logo.svg';
import './App.css';
import { Products } from './Pages/index';
import { NavigationBar } from './Components/index';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Products />
    </div>
  );
}

export default App;
