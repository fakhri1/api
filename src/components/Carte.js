import React from 'react';
import {Card,Button} from 'react-bootstrap';

function Carte({contact}) {
    console.log(contact);
  return <div >
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://image.freepik.com/vecteurs-libre/avatar-homme-barbu-portrait-vecteur-homme_9385-36.jpg" />
  <Card.Body>
    <Card.Title>{contact.name} </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </div>;
}

export default Carte;
