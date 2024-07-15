import {Row, Col, Button, Form, } from 'react-bootstrap';

export default function Choice({ index, choice, handleQuestionChoicesChange, handleDeleteChoice }) {

    return (
        <Row className="mb-3">
            <Form.Group as={Col} md="10">

                <Row style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                    <Col md={7}><Form.Label >
                        Choice {index + 1}
                    </Form.Label></Col>
                    <Col style={{ textAlign: "right" }}>
                        <Button variant='danger' onClick={() => handleDeleteChoice(index)}>Delete Choice</Button>
                    </Col>
                </Row>

                <Col style={{ display: "flex" }}>
                    <Form.Control
                        type='text'
                        name='choiceName'
                        value={choice.choiceName}
                        onChange={handleQuestionChoicesChange}
                        placeholder='e.g Choice'
                        required
                    />
                </Col>

            </Form.Group>
        </Row>
    );
}