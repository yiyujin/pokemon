import './App.css';
import Component from './Component';

function App() {
  return (
    <div className = "App" style = { { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", paddingTop : "80px", paddingBottom : "80px", margin : "0 auto"} }>
      <div className = "grid">
        <Component name = "파이리" type = "Fire" tags = {["fire", "lizard"]}/>
        <Component name = "꼬부기" type = "Water" tags = {["grass", "poison"]}/>
        <Component name = "피카츄" type = "Thunder" tags = {["electric"]}/>
      </div>
    </div>
  );
}

export default App;