import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from '../shared/Slider'

class CustomOptions extends React.Component {
    render() {
        return (
            <div>
                <Card id="customize-card">
                    <Card.Header>Customize your lesson</Card.Header>
                    <Card.Body>
                        <Slider/>
                        <br/>
                    </Card.Body>
                </Card>
            </div>
        )

    }
}
export default CustomOptions;

