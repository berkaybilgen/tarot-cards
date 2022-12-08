import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "./data/data.json";
import "./CardList.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CardList = (props) => {
  const [cards, setCards] = useState(data);

  useEffect(() => {
    if (props.selectedCat > 0) {
      const filteredCards = data.filter(
        (item) => item.category == props.selectedCat
      );
      setCards(filteredCards);
    } else {
      setCards(data);
    }
  }, [props.selectedCat]);

  return (
    <div id="card-list">
      <Container>
        <Row>
          {cards.map((item) => (
            <Col lg="2">
              <Card key={item.cardNo} no={item.cardNo} name={item.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardList;
