import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites: {front, back} }) {

  const [isFront, setIsFront] = useState(true)

  const handleFlip = () => {
    setIsFront(isFront => !isFront)
  }

  return (
    <Card>
      <div onClick={handleFlip}>
        <div className="image" >
          <img src={isFront ? front : back} alt="pokemon" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
