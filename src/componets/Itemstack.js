import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Container } from 'react-bootstrap';

function Itemstack() {
  return (
  
       <Container>
    <Stack direction="horizontal" gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
     

      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
     
      <Button variant="light"  >Light <img src={"./logo.jpg"}/></Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>


export default TypesExample;
    </Stack>
    </Container>
   
  );
}

export default Itemstack;