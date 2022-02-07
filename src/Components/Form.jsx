import React, { Component } from 'react';
import { Container, Button, Row, Col, Navbar, Card} from "react-bootstrap";
import axios from 'axios';
import Couriers from './Couriers';
import Configuration from './Configuration';
import Orders from './Orders';

import '../styles/Form.css';
import Logo from'../Images/tazz.png';
import Linkedin from'../Images/Linkedin.png';
import AlertInfo from './AlertInfo';


export default class Form extends Component {

    state = {
        assignments:[]
    }

    submit =  async () => {
        const couriers = window.couriers.getCouriers();
        const orders = window.orders.getOrders();
        const configuration = window.configuration.getConfiguration();
        const sentJson = { "configuration":{"maxDeliveryTimeMinutes":configuration.maxDeliveryTimeMinutes, "courierSpeedKmH": configuration.courierSpeedKmH},
        "couriers": couriers, "orders":orders};
        const url = 'http://localhost:8080/assignCouriers';
        const response = await axios.post(url, sentJson);
        const assignments = response.data.assignments;
        const array = [];
        let i = 0;
        for(i=0; i < assignments.length;i++){
            const val = [assignments[i].courierId,assignments[i].orderId,assignments[i].deliveryTimeMinutes];
            array.push(val);
        }
        this.setState({assignments:array});
    }

    render(){

        return(
            <div>
                  <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Logo}
                            width="100"
                            className="d-inline-block align-top"
                        />{' '}
                        Online Assignment
                    </Navbar.Brand>
                    </Container>
                </Navbar>

                <Container>
                    <AlertInfo/>
                    <Row>
                        <Col>
                            <Couriers ref={(couriers) => {window.couriers = couriers}}/>
                        </Col>
                        <Col>
                            <Orders ref={(orders) => {window.orders = orders}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Configuration ref={(configuration) => {window.configuration = configuration}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='text-center mb-1 mt-3'>
                            <Button variant="primary" onClick={this.submit}>Submit</Button> 
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Container>
                        {this.state.assignments.length !== 0 && <div className='text-center mt-3'>
                            <h5>The best assignment for the  couriers and orders is:</h5>
                        </div>
                        }
                        {this.state.assignments.map((x, i) => {
                            return (   

                                    <Row className='justify-content-center mb-3 mt-2 text-center'>
                                        <Col className='col-lg-3'>
                                            <Card border="primary mt-2" >
                                                <Card.Body>
                                                    Courier {x[0]}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col className='col-lg-3'>
                                            <Card border="primary mt-2" >
                                                <Card.Body>
                                                    in {x[2]} minutes
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col className='col-lg-3'>
                                            <Card border="primary mt-2" >
                                                <Card.Body>
                                                    will pick up order {x[1]}!
                                            </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                            )
                        })}
                    </Container>
                </div>
                <footer class="bg-light text-center text-lg-start mt-3">
                    <div class="text-center p-3 footer">
                        Created by Vadim Pislari  
                        <a class="text-dark" href="https://www.linkedin.com/in/vadim-pislari-364679173/">
                                <img
                                    alt=""
                                    src={Linkedin}
                                    width="30"
                                    className="d-inline-block linkedin"
                                />
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}
