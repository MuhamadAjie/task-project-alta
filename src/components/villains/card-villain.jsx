import React from "react";
import { Card, Button, Image } from "react-bootstrap";

const CardVillain = ({ dataVill, update, background }) => {
  const { id, imgSrc, name } = dataVill;
  const chooseChar = () => {
    update(id);
  };

  return(
    <>
      <Card className={id == background ? "card-hero active" : "card-hero"}>
        <Image className="image" src={imgSrc} alt="avatar" />
        <Card.Body>
          <h1>{name}</h1>
          <Button variant="primary" className="mt-3 mb-3 btn-choose" onClick={chooseChar}>
            Fight With {name}
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardVillain