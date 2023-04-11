import React,{useState,useEffect} from 'react';
import {useNotification} from 'rc-notification';
//import { useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-hooks/rules-of-hooks';
import axios from 'axios';
//import products from '../products';
import {Row,Col,ListGroup,Button,Image, ListGroupItem} from "react-bootstrap";
import { Router, useParams , Link} from 'react-router-dom';
import Rating from './Rating';

import IncDecCounter from './IncDecCounter'
function Kartdetails()
{ 
    let [num, setNum]= useState([]);
     

  
    
    let {id}=useParams();

    const [proj,updateProduct]=useState([])
    useEffect(()=>{
       axios.get('http://localhost:8080/'+id).then((response) =>{
           updateProduct(response.data)
       });
    },[])
   

   async  function getUser() 
    {
       // const navigate=useNavigate()
        try{

            const details = {
                count:num,
                 userid:id,
                 stock:proj.countInStock
                 
                }
       axios.put('http://localhost:8080/addcart/'+id,details)
            .then(response => {//navigate('/')
                useNotification.newInstance({}, notification => {
                    notification.notice({
                      content: 'Item add to cart successfully'
                    });
                  });


                console.log(response.data)});
        }catch(error)
      
        {
           console.log(error)  
        }
  
    }


    
  let incNum =()=>{
    if(num<proj.countInStock)
    {
    setNum(Number(num)+1);
    }
  };
 
  let decNum = () => {
     if(num>1)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
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
                       
                            <Row>
                        
                                <Col md="2">
                                <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                                </Col>
                                <Col  md="2">
                                <input type="text" class="form-control" value={num} onChange={handleChange}/>
                                </Col>
                                <Col  md="3">
                                <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                                </Col>
                                <Col >
                                <Button onClick={getUser}>Add to Cart</Button>
                                </Col>
                             
                               
                            </Row>
                      
                       
                    
                                
                      




                       
                    
                  </ListGroupItem>
                 </ListGroup>               
                 </Col>
            </Row>
           
            </div>

    )


}

export default Kartdetails;