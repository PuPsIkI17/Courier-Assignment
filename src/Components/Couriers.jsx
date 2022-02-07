import React, { Component} from 'react';
import { Card, Row, Col, Form, Button} from 'react-bootstrap';

export default class Couriers extends Component {

    state = {
        couriers:[{ id:1 , name: "", lat: 45.0, lon: 20.0  }]
    }

    getCouriers = () => {
        return this.state.couriers;
    }
      

    add = (index) =>{
        this.setState(prevState  => ({
            couriers: [...prevState.couriers, { id:index + 2, name: "", lat: 45.0, lon: 20.0  }]
        }))   
    }
    

    remove = (id) =>{
        var couriers =  [...this.state.couriers];
        couriers.splice(id, 1);
        this.setState({couriers:couriers})
    }

    handleNameChange = (event, id) => {
        event.preventDefault();
        var couriers =  [...this.state.couriers];
        couriers[id].name = event.target.value;
        this.setState({couriers:couriers})
    }

    handleLatChange = (event, id) => {
        event.preventDefault();
        var couriers =  [...this.state.couriers];
        couriers[id].lat = event.target.value;
        this.setState({couriers:couriers})
    }

    handleLonChange = (event, id) => {
        event.preventDefault();
        var couriers =  [...this.state.couriers];
        couriers[id].lon = event.target.value;
        this.setState({couriers:couriers})
    }
    render(){

        return(
            <Card border="primary" className="m-5 pt-3">
                <Card.Body className="m-1">
                <div className='text-center mb-1'>
                    <h4> Couriers:</h4>
                </div>
                <div className='text-center mb-2'>
                    Enter the couriers data:
                </div>
                {this.state.couriers.map((x, i) => {
                    return (
                        <div>
                            <Card border="primary mt-2"  >
                                <div className="mt-1"><b>Courier {i+1}.</b></div>
                                <Card.Body> 
                                    <Form.Group as={Row} className="mb-1" controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>Name:</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="Enter courier name" value={x.name} onChange={(e) => this.handleNameChange(e,i)} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-1" controlId="formHorizontalNumber">
                                        <Form.Label column sm={2}>Lat:</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="number" step="0.01" value={x.lat} onChange={(e) => this.handleLatChange(e,i)}/>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-1" controlId="formHorizontalNumber">
                                        <Form.Label column sm={2}>Lon:</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="number" step="0.01" value={x.lon} onChange={(e) => this.handleLonChange(e,i)} />
                                        </Col>
                                    </Form.Group>
                                    
                                    <div className="text-center">
                                        {this.state.couriers.length !== 1 && <Button variant="danger mt-2" onClick={() => this.remove(i)}>Remove</Button>}
                                    </div>
                                </Card.Body>
                            </Card>
                            <div className='text-center'>
                                {this.state.couriers.length - 1 === i && <Button className="mt-3"   onClick={() => this.add(i)} variant="primary">Add courier</Button>}
                            </div>
                        </div>
                    );
                })}
                </Card.Body>
            </Card>
        );
    }
}