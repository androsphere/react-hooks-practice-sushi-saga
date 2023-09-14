import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onEatSushi}) {
  const [index, setIndex] = useState(0)

  function onAddMore(){
    setIndex(index + 4)
  }
  const sushiToRender = sushis.slice(index, index + 4);
  

  

  return (
    <div className="belt">
      {sushiToRender.map((sushi) => (
        <Sushi
          sushi = {sushi}
          key = {sushi.id}
          onEatSushi={onEatSushi}
        />
      )

      )}
      <MoreButton onAddMore={onAddMore}/>
    </div>
  );
}

export default SushiContainer;
