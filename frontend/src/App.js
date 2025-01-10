import './App.css';
import Component from './Component';
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked( (prev) => !prev );
  };

  if ( isChecked ) {
    document.body.classList.add("show-border");
  } else {
    document.body.classList.remove("show-border");
  }

  //GET DATA
  const fetchData = async () => {        
    try {
      const response = await fetch("http://localhost:8000/api/query-a-database", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className = "page">

      <h3 style = { { color : "rgba(0, 0, 0, 0.4)" } }>Pokemon : { data.length }</h3>

      <br/>

      <div className = "grid">
        { data.map( ( item, index ) => (
            <Component key = { index } item = { item }/>
        ))}
      </div>

      <label className = "switch">
        <input type = "checkbox" checked = { isChecked } onChange = { handleToggle }/>
        <span className = "slider"></span>
      </label>

    </div>

  );
}

export default App;
