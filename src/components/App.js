import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [money, setMoney] = useState(100); 
  const [sushis, setSushis] = useState([]);
  

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => {
        const newSushis = sushis.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushis(newSushis);
      });
  }, []);
  function handleEatSushi(eatenSushi) {
    if (money >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushis(updatedSushis);
      setMoney((money) => money - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
  }
  
  const emptyPlates = sushis.filter((sushi)=>sushi.eaten)
  
  return (
    <div className="app">
      <SushiContainer sushis = {sushis} onEatSushi={handleEatSushi}/>
      <Table money = {money} setMoney = {setMoney} plates={emptyPlates}/>
    </div>
  );
}

export default App;
