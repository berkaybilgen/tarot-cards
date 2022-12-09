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

  useEffect(() => {
    if (props.searchValue !== undefined && props.searchValue.length > 2) {
      const filteredCards = data.filter((item) =>
        item.name.toLowerCase().includes(props.searchValue)
      );

      setCards(filteredCards);
    } else {
      setCards(data);
    }
  }, [props.searchValue]);

  return (
    <div id="card-list">
      <h1>{cards.length} cards</h1>
      <Container>
        <Row>
          {cards.map((item) => (
            <Col xs="6" md="3" lg="2">
              <Card key={item.cardNo} no={item.cardNo} name={item.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardList;
