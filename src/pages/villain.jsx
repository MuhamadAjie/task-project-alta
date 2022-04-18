import React, {useState, useEffect} from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import CardVillain from "../components/villains/card-villain";
import Api from "../utils/api";
import Loading from "../components/loading";

const Villain = () => {
  let {id} = useParams()
  const navigate = useNavigate();
  const [villain, setVillain] = useState([])
  const [idVill, setIdVill] = useState("");
  const [loading, setLoading] = useState(false)

  const Pilih = (id) => {
    setIdVill(id);
  };

  useEffect(() => {
    setLoading(true)
    fetch(Api.allVillains)
      .then((res) => res.json())
      .then((data) => {
        setVillain(data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const handleBack = () => {
    navigate(`/city/${id}`);
  }

  return(
    <>
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
                      <CardVillain dataVill={data} background={idVill} update={Pilih} />
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