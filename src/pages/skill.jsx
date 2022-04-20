import React, {useState, useEffect} from "react";
import Api from "../utils/api";
import { Card, CardGroup, Button, Container, Image} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/loading";

const Skill = () => {
  let {heroID, heroName} = useParams()
  const navigate = useNavigate();
  const [abilityHeroes, setAbilityHeroes] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(Api.chooseHeroes + heroID)
      .then((res) => res.json())
      .then((data) => {
        setAbilityHeroes(data.skills);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const handleClick = () => {
    navigate(`/city/${heroID}/${heroName}`)
  }

  return(
    <Container className="text-center">
      <h1 className="mt-5">{heroName} Skills</h1>
      {
        loading == true ?
        <>
          <Loading />
        </> :
        <>
          <CardGroup className="mt-5">
            {
              abilityHeroes.map((item) => (
                <Card className="m-3 card-hero" key={item.id}>
                  <Image className="image" variant="top" src={item.imgSrc} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              ))
            }
          </CardGroup>
        </>
      }
      <Button onClick={handleClick} className="mt-5">Back to City</Button>
    </Container>
  )
}

export default Skill