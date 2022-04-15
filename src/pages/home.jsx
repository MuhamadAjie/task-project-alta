import React, { useState, useEffect, } from "react";
import Api from "../utils/api";
import Card from "../components/home/card-hero";
import CardAbility from "../components/home/card-skill";

const Home = () => {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    fetch(Api.allHeroes)
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const [char, setChar] = useState("");
  const [idChar, setIdChar] = useState("");
  const [show, setShow] = useState(false)

  const Pilih = (nameChar, id) => {
    setChar(nameChar);
    setIdChar(id);
  };

  const handleClick = () => {
    setShow(true)
  }

  return (
    <>
      <div className="container">
        {
          show == false ?
          <>
            {heroes.map((data) => (
              <Card dataChar={data} background={idChar} update={Pilih} key={data.id} />
              ))}
            <button onClick={handleClick} className={idChar == false  ? "btn-disable" : "btn-ability"}>Lihat Kemampuan {char}</button>
          </> :
          <>
            <CardAbility idCharacter={idChar}/>
          </>
        }
      </div>
    </>
  );
};

export default Home
