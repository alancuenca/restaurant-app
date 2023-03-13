// import logo from './logo.svg';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact'
import Events from './components/Events/Events'
import FoodMenu from './components/FoodMenu/FoodMenu'
import './App.css';


function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        Hello
      </header>
      <Contact />
      <Events />
      <FoodMenu />
    </div>
  );
}

export default App;
