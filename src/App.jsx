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
        <Vecinos userName={"Maestro"} name={"Maestro"} />
        <Vecinos userName={"visionmedia"} name={"visionmedia"} />
        <Vecinos userName={"c9s"} name={"Yo-An Lin"} />
        <Vecinos userName={"fabpot"} name={"Fabien Potencier"} />
        <Vecinos userName={"weierophinney"} name={"Matthew Weier O'Phinney"} />
        <Vecinos userName={"springmeyer"} name={"Dane Springmeyer"} />
        <Vecinos userName={"dcramer"} name={"David Cramer"} />
        <Vecinos userName={"jeromeetienne"} name={"Jerome Etienne"} />
        <Vecinos userName={"ornicar"} name={"Thibault Duplessis"} />
        <Vecinos userName={"davglass"} name={"Dav Glass"} />
        <Vecinos userName={"postmodern"} name={"Postmodern"} />
        <Vecinos userName={"tmcw"} name={"Tom MacWright"} />
      </div>
    </div>
  );
}



export default App;