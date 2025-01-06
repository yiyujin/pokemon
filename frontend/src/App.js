import './App.css';
import Component from './Component';
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

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

      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
