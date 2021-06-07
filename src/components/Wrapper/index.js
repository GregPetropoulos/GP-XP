import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";

function Wrapper(props) {
  return (
    <main>
      <Container fluid>{props.children}</Container>
    </main>
  );
}

export default Wrapper;
