import React from 'react';
import {Button, Card, CardBody, CardText, CardTitle} from "react-bootstrap";

const CardItemComponet = (props) => {

    const addItem = () =>{
        console.log (props.card);}

return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
        <Card>
            <Card.Img Variant='top'src={props.card.imgurl}/>
            <Card.Body>
                <Card.Title> {props.card.name}</Card.Title>
                <Card.Text>
                    <strong> {props.card.price} грн.</strong>
                </Card.Text>
                <Button variant="success" on Click={addItem}>ADD</Button>
            </Card.Body>
        </Card>
     </div>       
);
};
export default CardItemComponet;