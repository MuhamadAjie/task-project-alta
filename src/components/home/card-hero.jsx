import React from "react";
import { Card, Button } from "react-bootstrap";

const CardHero = ({ dataChar, update, background }) => {
  const { id, imgSrc, name, city, age } = dataChar;
  const chooseChar = () => {
    update(name, id);
  };

  return(
    <>
      <Card className={id == background ? "card active" : "card"} style={{ width: '18rem' }}>
        <Card.Img className="image" src={imgSrc} alt="avatar" />
        <Card.Body>
          <h1>{name}</h1>
          <h2>{age}</h2>
          <h3>{city}</h3>
          <Button variant="primary" className="btn-choose" onClick={chooseChar}>
            Choose
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardHero