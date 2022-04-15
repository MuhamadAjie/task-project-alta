import React, {useState, useEffect} from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardAbility = ({idCharacter}) => {
  const [abilityHeroes, setAbilityHeroes] = useState([])

  useEffect(() => {
    fetch(Api.chooseHeroes + idCharacter)
      .then((res) => res.json())
      .then((data) => {
        setAbilityHeroes(data.skills);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return(
    <>
      {
        abilityHeroes.map((item) => (
          <div className="card" key={item.id}>
            <Image className="image" src={item.imgSrc} alt="avatar" />
            <h1>{item.name}</h1>
          </div>
        ))
      }
      <Link to="/" className="btn-back">Back to Heroes List</Link>
    </>
  )
}

export default CardAbility