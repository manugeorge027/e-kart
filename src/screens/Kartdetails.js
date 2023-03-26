import React,{useState,useEffect} from 'react';
import axios from 'axios';
//import products from '../products';
import {Row,Col,ListGroup,Button,Image, ListGroupItem} from "react-bootstrap";
import { Router, useParams , Link} from 'react-router-dom';
import Rating from './Rating';
function Kartdetails()
{  let {id}=useParams();

    const [proj,updateProduct]=useState([])
    useEffect(()=>{
       axios.get('http://localhost:8080/'+id).then((response) =>{
           updateProduct(response.data)
       });
    },[])
   
  console.log('http://localhost:8080/'+id)
 

  // const proj=(products.find((p)=>p._id === id))
    return (
        <div>
   
        
            <Row>
                <Link to="/"><i class="fa-solid fa-arrow-left">  Back</i></Link>
                <Col md="6">
                    <Image  src={proj.image} alt={proj.name} fluid/>
                 </Col>
                 <Col md="4">
                 <ListGroup variant='flash'>
                    <ListGroupItem>
                        <h4> {proj.name}</h4>
                        <h5>Brand :{proj.brand}</h5>
                    </ListGroupItem>
                    <ListGroupItem>
                      <h5>Price:${proj.price}</h5>  
                    </ListGroupItem>
                    <ListGroupItem>
                    <Rating value={proj.rating}/>
                    <h5>Description</h5>
                    {proj.description}
                    </ListGroupItem>
                    <ListGroupItem>
                        <h5> Category: {proj.category}</h5>
                    </ListGroupItem>
                    <ListGroupItem>
                        <h5 style={{fontStyle:"red"}}>Stock :{proj.countInStock > 0 ? proj.countInStock:" Out of Stock"} </h5>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button>Add to Cart</Button>
                    </ListGroupItem>
                 </ListGroup>               
                 </Col>
            </Row>
           
            </div>

    )
}

export default Kartdetails;