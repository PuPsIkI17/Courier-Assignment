import React, { useState } from 'react';
import { Alert } from "react-bootstrap";

export default function AlertInfo() {
    const [show, setShow] = useState(true);
    if(show){
        return (
                <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Please introduce valid information.</Alert.Heading>
                    If there are empty fields the submit action will fail. 
                </Alert>
        );
    }
    else return(
        <div/>
    )
}