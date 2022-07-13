import './App.css';
import Cards from './components/Cards/Cards';
import Navbar from "./components/Navbar/Navbar"
import Title from "./components/Title/Title"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Cards />
    </div>
  );
}

export default App;
