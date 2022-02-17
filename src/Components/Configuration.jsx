import React, { Component} from 'react';
import { Card, Row, Col, Form} from 'react-bootstrap';

export default class Configuration extends Component {
    state = {
        maxDeliveryTimeMinutes: 40,
        courierSpeedKmH: 20 
    }

    getConfiguration = () => {
        return this.state;
    }

    handleMaxDelChange = (event) => {
        event.preventDefault();
        this.setState({maxDeliveryTimeMinutes:event.target.value})
    }

    handleCorSpeedChange = (event) => {
        event.preventDefault();
        this.setState({courierSpeedKmH:event.target.value})
    }
    render(){
        return(
            <Card border="primary" className="m-5 mb-1 mt-1 pt-4">
                <div className='text-center mb-1'>
                    <h4> Configuration:</h4>
                </div>
                <div className='text-center mb-2'>
                    Enter the configuration data:
                </div>
                <Card.Body>
                    <div>
                        <Form.Group as={Row} className="mb-1 justify-content-md-center" controlId="formHorizontalNumber">
                            <Form.Label column sm={3}>Max delivery time minutes:</Form.Label>
                            <Col sm={2}>
                                <Form.Control type="number" step="0.01" value={this.state.maxDeliveryTimeMinutes} onChange={this.handleMaxDelChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1 justify-content-md-center" controlId="formHorizontalNumber">
                            <Form.Label column sm={3}>Courier Speed in Km/H:</Form.Label>
                            <Col sm={2}>
                                <Form.Control type="number" step="0.01" value={this.state.courierSpeedKmH} onChange={this.handleCorSpeedChange} />
                            </Col>
                        </Form.Group>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}