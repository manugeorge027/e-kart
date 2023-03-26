
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios";
import React,{useState,useEffect} from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Itemdetails() {
  const [products,updateProduct]=useState([])
  const [count,updateCount]=useState([])
  const flag=0;

     useEffect(()=>{
        axios.get("http://localhost:8080/").then((response) =>{
            updateProduct(response.data)
        });
     },[])
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                      <a href="#!" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> <Link to='/'>
                       Continue shopping </Link>
                      </a>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have 4 items in your cart</p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Sort by:</span>
                          <a href="#!" className="text-body">
                            price <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>
                    {
                         products.map(p =>(
                          
                          
                          <MDBCard className="mb-3">
                          <MDBCardBody>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <MDBCardImage
                                    src={p.image}
                                   
                                    fluid
                                    className="rounded-3"
                                    style={{ width: "65px" }}
                                    alt="Shopping item"
                                  />
                                </div>
                                <div className="ms-3">
                                  <MDBTypography tag="h5">
                                    {p.name}
                                  </MDBTypography>
                                  <p className="small mb-0">{p.brand}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <MDBTypography
                                    tag="h5"
                                    className="fw-normal mb-0"
                                  >
                                    {p.countInStock}
                                  </MDBTypography>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <MDBTypography tag="h5" className="mb-0">
                                   {p.price}
                                  </MDBTypography>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <MDBIcon fas icon="trash-alt" />
                                </a>
                              </div>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                         ))
                    }

                    {/* <MDBCard className="mb-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                fluid
                                className="rounded-3"
                                style={{ width: "65px" }}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                                Iphone 11 pro
                              </MDBTypography>
                              <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography
                                tag="h5"
                                className="fw-normal mb-0"
                              >
                                2
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                                $900
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <MDBIcon fas icon="trash-alt" />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard> */}

                    

                    

                    
                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Card details
                          </MDBTypography>
                          
                        </div>

                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>

                        <form className="mt-4">
                          <MDBInput
                            className="mb-4"
                            label="Cardholder's Name"
                            type="text"
                            size="lg"
                            placeholder="Cardholder's Name"
                            contrast
                          />

                          <MDBInput
                            className="mb-4"
                            label="Card Number"
                            type="text"
                            size="lg"
                            minLength="19"
                            maxLength="19"
                            placeholder="1234 5678 9012 3457"
                            contrast
                          />

                          <MDBRow className="mb-4">
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Expiration"
                                type="text"
                                size="lg"
                                minLength="7"
                                maxLength="7"
                                placeholder="MM/YYYY"
                                contrast
                              />
                            </MDBCol>
                            <MDBCol md="6">
                              <MDBInput
                                className="mb-4"
                                label="Cvv"
                                type="text"
                                size="lg"
                                minLength="3"
                                maxLength="3"
                                placeholder="&#9679;&#9679;&#9679;"
                                contrast
                              />
                            </MDBCol>
                          </MDBRow>
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">$4818.00</p>
                        </div>

                        <MDBTypography color="black" block size="lg">
                          <div className="fas fa-long-arrow-alt-right ms-2">
                            <span>$4818.00</span>
                            <span>
                              <Button>Checkout</Button>
                            </span>
                            {/* <span>
                              Checkout{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span> */}
                          </div>
                        </MDBTypography>
                       
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}