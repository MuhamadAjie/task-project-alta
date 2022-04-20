import React, { useState, useEffect, } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Api from "../utils/api";
import Card from "../components/home/card-hero";
import Loading from "../components/loading";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(Api.allHeroes)
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const [char, setChar] = useState("");
  const [idChar, setIdChar] = useState("");

  const Pilih = (nameChar, id) => {
    setChar(nameChar);
    setIdChar(id);
  };

  const handleClick = () => {
    navigate(`/city/${idChar}/${char}`)
  }

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  const handleBack = () => {
    navigate("/")
  }

  return (
    <Container className="text-center">
      {
        loading == true ?
        <>
          <Loading />
        </> :
        <>
          <div className="mt-3 d-flex justify-content-between">
            <h2>Choose Your Favorite Character</h2>
            <div>
              <Button onClick={handleDelete} className="me-3">Reset Your Game Progress</Button>
              <Button onClick={handleBack}>Back to Landing Page</Button>
            </div>
          </div>
          <div className="mt-5">
            <Row xs={1} md={2} lg={3} className="g-4">
              {
                heroes.map((data) => (
                  <Col key={data.id}>
                    <Card dataChar={data} background={idChar} update={Pilih} />
                  </Col>
                ))
              }
            </Row>
          </div>
          <button onClick={handleClick} variant="primary" className={idChar == false  ? "mt-5 btn-disable" : "mt-5 btn-ability"}>Select Hero {char}</button>
        </>
      }
    </Container>
  );
};

export default Home
