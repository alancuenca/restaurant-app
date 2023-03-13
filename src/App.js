// import logo from './logo.svg';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact'
import Events from './components/Events/Events'
import FoodMenu from './components/FoodMenu/FoodMenu'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <FoodMenu />
      <Events />
      <Contact />
    </div>
  );
}

export default App;
