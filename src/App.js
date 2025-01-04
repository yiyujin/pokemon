import './App.css';
import Component from './Component';

function App() {
  return (
    <div className = "App" style = { { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", paddingTop : "80px", paddingBottom : "80px", margin : "0 auto"} }>
      <div className = "grid">
        <Component name = "파이리" />
        <Component name = "꼬부기" />
        <Component name = "피카츄" />
      </div>
    </div>
  );
}

export default App;
