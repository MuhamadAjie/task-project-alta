import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardCity = ({name, imageSrc, idHero1, idHero2}) => {
  let navigate = useNavigate()

  const handleClick = () => {
    navigate("/villain")
  }

  return(
    <Card style={{border: "none"}} className="m-3">
      <Card.Img className="img-city" variant="top" src={imageSrc} />
      <Card.Body className="text-center">
        {/* {console.log("hero1", idHero1)}
        {console.log("hero2", idHero2)} */}
        <button onClick={() =>handleClick()} variant="primary" className={idHero1 == idHero2  ? "mt-5 btn-ability" : "mt-5 btn-disable"}>Select {name}</button>
      </Card.Body>
    </Card>
  )
}

export default CardCity