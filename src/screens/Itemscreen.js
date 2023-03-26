import react from 'react'
import Card from 'react-bootstrap/Card';
import { Component,Row,Col } from 'react-bootstrap'
import Rating from './Rating';
function Itemscree(product){
    return(
      
        <div>
            <Card className='my-3 p-3 rounded'>
                <a href={product._id}>
            <Card.Img variant="top"  src={product.image} />
            </a>
            <Card.Body>
              <Card.Title as="div"><strong>{product.name}</strong></Card.Title>
             
              <Card.Text as="div">
                <div className='my-3'>
                    <Rating value={product.rating}/>
                    {/* {product.rating} from {product.numReviews} */}
                </div>
                
              </Card.Text>
              <Card.Text as="div">
                <div className='my-3'>
                   $ {product.price}
                                  </div>
                
              </Card.Text>
            </Card.Body>
            
        
          </Card>

        </div>
        )
    
}
export default Itemscree