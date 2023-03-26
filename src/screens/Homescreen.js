import react,{useState, useEffect} from 'react'
import axios  from 'axios'
import { Component,Row,Col } from 'react-bootstrap'
import Itemscreen from './Itemscreen.js'
function Homescreen(){
    const [products,updateProduct]=useState([])
     useEffect(()=>{
        axios.get("http://localhost:8080/").then((response) =>{
            updateProduct(response.data)
        });
     },[])

    return(
        <div>
            <Row>
               
                  {
                products.map(product =>(
                    <Col md={2}>
                    {Itemscreen(product)}
                    </Col>
                 

                 ))
            }

            </Row>
        </div>

    )
}
export default Homescreen