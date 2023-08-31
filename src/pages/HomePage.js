import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../Components/Pizza";
import ControlledCarousel from "../Components/ControlledCarousel";
import { getAllPizzas } from "../actions/pizzaAction";
import Loader from "../Components/Loader";
import Error from "../Components/Error";

import '../CSS/Pizza.css';

function HomePage() {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
    <ControlledCarousel />
      <Container className="" xs={11} sm={12} md={6}>
     
        {loading ? (
          <span className="d-flex align-items-center justify-content-center"><Loader/></span>
        ) : error ? (
          <Error>Error while fetching pizza datas{error}</Error>
        ) : (
          
          <Row classname="homepage">
            <h1 style={{textAlign:"center", padding:"50px 0px 20px 0px" , color:"whitesmoke"}}>VEG & NON_VEG</h1>
            <h2 style={{textAlign:"center", textDecoration:"underline", color:"green"}}>Grab your Pizzas</h2>
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>

            ))}
          </Row>

          

              

        )}
      </Container>
      
    
    </>
  );
}

export default HomePage;