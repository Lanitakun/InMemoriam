import Navbar from "./components/navbar/NavBar";
import Vecinos from "./components/profile/vecinos/Vecinos";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="vecinos-container">
        <Vecinos userName={"lanitakun"} name={"Tomás González"} />
        <Vecinos userName={"spotX"} name={"SpotX"}/>
        <Vecinos userName={"Google"} name={"Google"} />
        <Vecinos userName={"Gbor"} name={"Gbor"} />
        <Vecinos userName={"Meste"} name={"Meste"} />
        <Vecinos userName={"Watcher"} name={"Watcher"} />
      </div>
    </div>
  );
}



export default App;