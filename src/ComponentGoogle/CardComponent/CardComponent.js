import React from 'react';
import { Card } from 'react-bootstrap';
const CardComponent = (props) => {
  const style = {
    backgroundColor: '#ffffff',
    color: '#000000'
  };
  return (
    <Card  className="mb-2 text-center" style={style}>
      <Card.Body>
        <Card.Title>
          {props.element.title}
        </Card.Title>
        <Card.Subtitle>
          {props.element.value}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
export default CardComponent;
