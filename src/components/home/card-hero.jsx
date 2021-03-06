import React from "react";
import { Card, Button, Image } from "react-bootstrap";

const CardHero = ({ dataChar, update, background }) => {
  const { id, imgSrc, name, city, age } = dataChar;
  const chooseChar = () => {
    update(name, id);
  };

  return(
    <>
      <Card className={id == background ? "card-hero active" : "card-hero"}>
        <Image className="image" src={imgSrc} alt="avatar" />
        <Card.Body>
          <h1>{name}</h1>
          <h2>{age}</h2>
          <h3>{city}</h3>
          <Button variant="primary" className="mt-3 mb-3 btn-choose" onClick={chooseChar}>
            Choose
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardHero