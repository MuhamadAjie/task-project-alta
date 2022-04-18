import React, {useState, useEffect} from "react";
import { Container, Button, CardGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import CardCity from "../components/city/card-city";
import Api from "../utils/api";
import Loading from "../components/loading";

const City = () => {
  let {id} = useParams()
  const navigate = useNavigate();
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameCharacter, setNameCharacter] = useState("");

  useEffect(() => {
    setLoading(true)
    fetch(Api.selectCity)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  useEffect(() => {
    fetch(Api.chooseHeroes + id)
      .then((res) => res.json())
      .then((dataChar) => {
        // console.log(dataChar.name)
        setNameCharacter(dataChar.name)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const handleOtherHero = () => {
    navigate("/home");
  }

  const handleInfo = () => {
    navigate(`/skill/${id}`);
  }

  return(
    <Container>
      {
        loading == true ?
        <div className="text-center">
          <Loading />
        </div> :
        <>
          <div className="mt-3 d-flex justify-content-between">
            <div>
              <h1>Welcome {nameCharacter} !</h1>
              <h2>Choose Your Battle Ground</h2>
            </div>
            <div>
              <Button onClick={handleInfo} className="me-3">Hero Information</Button>
              <Button onClick={handleOtherHero}>Other Hero</Button>
            </div>
          </div>
          <CardGroup>
            {city && city.map((item) => {
              return(
                <div key={item.id}>
                  {/* {console.log(">>>>>>", item.heroes[0].name)} */}
                  <CardCity name={item.name} imageSrc={item.imgSrc} idHero1={nameCharacter} idHero2={item.heroes[0].name}/>
                </div>
              )
              })}
          </CardGroup>
        </>
      }
    </Container>
  )
}

export default City