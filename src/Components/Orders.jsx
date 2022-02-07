import React, { Component} from 'react';
import { Card, Row, Col, Form, Button} from 'react-bootstrap';

export default class Orders extends Component {

    state = {
        orders:[{ id:1, actions:[{type:"PICKUP",lat: 45.0, lon: 20.0}, {type:"DELIVERY",lat: 46.0, lon: 21.0}]}]
    }

    getOrders = () => {
        return this.state.orders;
    }

    add = (index) =>{
        this.setState(prevState  => ({
            orders: [...prevState.orders, { id:index + 2, actions:[{type:"PICKUP",lat: 45.0, lon: 20.0}, {type:"DELIVERY",lat: 46.0, lon: 21.0}]}]
        }))   
    }

    remove = (id) =>{
        var orders =  [...this.state.orders];
        orders.splice(id, 1);
        this.setState({orders:orders})
    }

    handlepickLatChange = (event, id) => {
        event.preventDefault();
        var orders =  [...this.state.orders];
        orders[id].actions[0].lat = event.target.value;
        this.setState({orders:orders})
    }

    handlepickLonChange = (event, id) => {
        event.preventDefault();
        var orders =  [...this.state.orders];
        orders[id].actions[0].lon = event.target.value;
        this.setState({orders:orders})
    }


    handledelLatChange = (event, id) => {
        event.preventDefault();
        var orders =  [...this.state.orders];
        orders[id].actions[1].lat = event.target.value;
        this.setState({orders:orders})
    }

    handledelLonChange = (event, id) => {
        event.preventDefault();
        var orders =  [...this.state.orders];
        orders[id].actions[1].lon = event.target.value;
        this.setState({orders:orders})
    }

    render(){

        return(
            <Card border="primary" className="m-5 pt-3">
                <Card.Body className="m-1">
                <div className='text-center mb-1'>
                    <h4> Orders:</h4>
                </div>
                <div className='text-center mb-2'>
                    Enter the orders data:
                </div>
                {this.state.orders.map((x, i) => {
                    return (
                        <div>
                            <Card border="primary  mt-2"  >
                                <div className="mt-1"><b>Order {i+1}.</b></div>
                                <Card.Body>
                                    <Form.Group as={Row} className="mb-1" controlId="formHorizontalNumber">
                                        <Form.Label column sm={4}>Pickup Lat:</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="number" step="0.01" value={x.actions[0].lat} onChange={(e) => this.handlepickLatChange(e,i)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-1" controlId="formHorizontalNumber">
                                        <Form.Label column sm={4}>Pickup Lon:</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="number" step="0.01" value={x.actions[0].lon} onChange={(e) => this.handlepickLonChange(e,i)} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-1" controlId="formHorizontalNumber">
                                        <Form.Label column sm={4}>Delivery Lat:</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="number" step="0.01" value={x.actions[1].lat} onChange={(e) => this.handledelLatChange(e,i)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-1" controlId="formHorizontalNumber">
                                        <Form.Label column sm={4}>Delivery Lon:</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="number" step="0.01" value={x.actions[1].lon} onChange={(e) => this.handledelLonChange(e,i)} />
                                        </Col>
                                    </Form.Group>
                                    
                                    <div className="text-center">
                                        {this.state.orders.length !== 1 && <Button variant="danger mt-2" onClick={() => this.remove(i)}>Remove</Button>}
                                    </div>
                                </Card.Body>
                            </Card>
                            <div className='text-center'>
                                {this.state.orders.length - 1 === i && <Button className="mt-3"  onClick={() => this.add(i)} variant="primary">Add order</Button>}
                            </div>
                        </div>
                    );
                })}
                </Card.Body>
            </Card>
        );
    }
}