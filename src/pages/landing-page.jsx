import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };

  return(
    <div className="bgLanding">
      <Container>
          <div className="text-center">
            <p className="heroText1">
              ENJOY YOUR GAME
            </p>
            <p className="fst-italic heroText2">
              Stay active with a little workout.
            </p>
            <button className="mt-5 btnHero" onClick={handleStart}>START GAME</button>
          </div>
      </Container>
    </div>
  )
}

export default Landing