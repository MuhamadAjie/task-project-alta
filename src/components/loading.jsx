import React from "react";
import { Container, Image } from "react-bootstrap";

function LoadingScreen() {
  return (
    <Container>
      <Image
        className="mt-5"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt="loading..."
      />
      <h2>Loading...</h2>
    </Container>
  );
}

export default LoadingScreen;
