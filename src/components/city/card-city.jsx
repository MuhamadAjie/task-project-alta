import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams} from "react-router-dom";

const CardCity = ({name, imageSrc, nameHero1, nameHero2}) => {
  let navigate = useNavigate()
  let {heroID, heroName} = useParams()

  const handleClick = () => {
    navigate(`/villain/${heroID}/${heroName}/${name}`)
  }

  const newHero = nameHero2.map((data) => data.name)
  const found = newHero.find(element => element == nameHero1);

  return(
    <Card style={{border: "none"}} className="m-3">
      <Card.Img className="img-city" variant="top" src={imageSrc} />
      <Card.Body className="text-center">
        <button onClick={handleClick} variant="primary" className={nameHero1 == found ? "mt-5 btn-ability" : "mt-5 btn-disable"}>Select {name}</button>
      </Card.Body>
    </Card>
  )
}

export default CardCity