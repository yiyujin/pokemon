import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "App">

      <div className = "Component">

        <img/>

        <div>
          <h2>Name</h2>

          <div style = { { display : "flex" } }>
            <img className = "type"/>

            <div>
              <h3>Type</h3>
              <p>Tags</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
