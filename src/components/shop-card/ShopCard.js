import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShopCard = (props) => {
  const { card } = props;
  const title = card?.title ?? "Default Title";
  const description = card?.description ?? "Default Description";

  return (
    <Card>
      <Card.Img variant="top" src="https://via.placeholder.com/100x180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;