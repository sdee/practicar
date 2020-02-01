import React from 'react';
import { Card, Form, Tabs, Tab } from 'react-bootstrap';
import { setFilter } from '../../actions';
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

