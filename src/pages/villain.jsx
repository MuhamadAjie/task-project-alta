import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button, Row, Col, Modal, ProgressBar } from "react-bootstrap";
import CardVillain from "../components/villains/card-villain";
import Loading from "../components/loading";
import Api from "../utils/api";

const Villain = () => {
  let {heroID, heroName, cityName} = useParams()
  const navigate = useNavigate();

  const [villain, setVillain] = useState([]);
  const [idVill, setIdVill] = useState("");
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false);
  const [nameVill, setNameVill] = useState("");

  const [chooseVil, setChooseVil] = useState([]);
  const [heroHP, setHeroHP] = useState("");
  const [villainHP, setVillainHP] = useState("");

  const handleClose = () => setShow(false);

  const handleBack = () => {
    navigate(`/city/${heroID}/${heroName}`);
  }

  const Pilih = (nameVill,id) => {
    setNameVill(nameVill);
    setIdVill(id);
    handleGetVillain(id)
    setShow(true);
  };

  useEffect(() => {
    setLoading(true)
    fetch(Api.selectCity)
      .then((res) => res.json())
      .then((data) => {
        if(cityName === "Toyama"){
          setVillain(data[0].villains);
        }else if(cityName === "West City"){
          setVillain(data[1].villains);
        }else if(cityName === "Konoha"){
          setVillain(data[2].villains);
        }else if(cityName === "Suna"){
          setVillain(data[3].villains);
        }else if(cityName === "Kuala Lumpur"){
          setVillain(data[4].villains);
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const handleGetVillain = (id) => {
    fetch(Api.chooseVillain + id)
      .then((res) => res.json())
      .then((data) => {
        setChooseVil(data)
        // const dataHP = localStorage.getItem(`${heroName} Vs ${nameVill}`)
        // const temp = JSON.parse(dataHP)
        // console.log("<<<", temp)

        // if(!dataHP){
        //   setVillainHP(data[0].maxHP)
        //   setHeroHP(100)
        // } else {
        //   setVillainHP(temp.villainHP)
        //   setHeroHP(temp.heroHP)
        // }
        setVillainHP(data[0].maxHP)
        setHeroHP(100)
      })
      .catch((err) => {
        console.log(err)
      });
  }

  const handleFight = () => {
    const dataSend = {
      heroHP,
      villainHP
    }
    fetch(Api.fighting,{
      method: 'POST',
      body: JSON.stringify(dataSend),
      headers:{
        'Content-type' : 'application/json'
      }
    })
    .then(res => res.json())
    .then(hasil =>{
      // console.log(">>>", hasil)
      localStorage.setItem(`${heroName} Vs ${nameVill}`, JSON.stringify(hasil))
      const dataHP = localStorage.getItem(`${heroName} Vs ${nameVill}`)
        const temp = JSON.parse(dataHP)
        console.log("<<<", temp)
      setHeroHP(temp.heroHP)
      setVillainHP(temp.villainHP)
    })
    .catch(err =>{
      alert(err)
    })
  }

  return(
    <>
      {/* Modal Fight */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Battle With {nameVill}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {
            chooseVil.map((item) => (
              <div key={item.id}>
                <img className="mb-5 image" src={item.imgSrc}/>
                <ProgressBar className="mb-3" striped variant="success" now={villainHP} label={`${villainHP}%`} />
                {
                  heroHP - 10?
                  <>
                    <h2 className="mb-3">You Lose, Your HP -10%</h2><h1>Ready</h1>
                  </> :
                  villainHP - 10 ?
                  <>
                    <h2 className="mb-3">You Win, Enemy HP -10%</h2>
                  </> :
                  <>
                    <h1>Ready</h1>
                  </>
                }
                <ProgressBar className="mb-3" striped variant="info" now={heroHP} label={`${heroHP}%`} />
              </div>
            ))
          }
          <h3 className="mb-3">- Hero {heroName} -</h3>
          <Button variant="primary" onClick={() => handleFight()}>Fight</Button>
        </Modal.Body>
      </Modal>

      <Container className="text-center">
        {
          loading == true ?
          <>
            <Loading />
          </> :
          <>
            <div className="mt-3 d-flex justify-content-between">
              <h2>Choose Your Villain</h2>
              <div>
                <Button onClick={handleBack}>Back to City</Button>
              </div>
            </div>
            <div className="mt-5">
              <Row xs={1} md={2} lg={3} className="g-4">
                {
                  villain.map((data) => (
                    <Col key={data.id}>
                      <CardVillain dataVill={data} background={idVill} update={Pilih}/>
                    </Col>
                  ))
                }
              </Row>
            </div>
          </>
        }
      </Container>
    </>
  )
}

export default Villain