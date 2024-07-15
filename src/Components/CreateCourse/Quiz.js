import React, { useState } from 'react';
import { Accordion, Button, Row, Col, Form } from 'react-bootstrap';
import Choice from './Choice';

export default function Quiz({ index, quiz, handleQuizChange, handleDeleteQuiz }) {
    const [questionChoices, setQuestionChoices] = useState([]);
    //const newQuiz = { qId: newQuizId, qQuestion: '', qChoice: [], qAnswer: '' };

    // {"choiceId": '', "choiceName": ''}
    function handleAddChoice() {
        if (questionChoices.length < 5) {
            const newChoiceId = questionChoices.length > 0 ? questionChoices[questionChoices.length - 1].choiceId + 1 : 1;
            const newChoice = { choiceId: newChoiceId, choiceName: '' };
            setQuestionChoices([...questionChoices, newChoice]);
            handleQuizChange({ ...quiz, qChoice: [...questionChoices, newChoice] });
        }
    }

    function handleDeleteChoice(index) {
        const updateChoice = questionChoices.filter((_, i) => (index !== i))
        setQuestionChoices(updateChoice);
        handleQuizChange({ ...quiz, qChoice: updateChoice });
    }

    function handleQuestionChoicesChange(e, index) {
        const { name, value } = e.target;
        const updateChoice = questionChoices.map((choice, i) =>
            index === i ? { ...choice, [name]: value } : choice
        );
        setQuestionChoices(updateChoice);
        handleQuizChange({ ...quiz, qChoice: updateChoice });
        console.log(questionChoices);
    }

    return (
        <Accordion style={{ marginBottom: "10px" }}>
            <Accordion.Item eventKey={`quiz-${index}`}>
                <Accordion.Header >
                    <Col md={9}>
                        <h6 style={{ marginBottom: "0px" }}>Quiz {index + 1}</h6>
                    </Col>
                </Accordion.Header>

                <Accordion.Body>
                    <Row style={{ textAlign: "right" }}>
                        <Col>
                            <Button onClick={handleAddChoice}>Add Choice</Button> &nbsp; &nbsp;

                        </Col>
                    </Row>
                    <Row>
                        <Form id={`quiz-form-${index}`}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="10">
                                    <Form.Label>Question</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='qQuestion'
                                        value={quiz.qQuestion}
                                        onChange={(e) => handleQuizChange({ ...quiz, qQuestion: e.target.value })}
                                        placeholder='e.g Question ?'
                                        required
                                    />
                                </Form.Group>
                            </Row>

                            {questionChoices.map((choice, indexChoice) => (
                                <Choice
                                    key={choice.choiceId}
                                    index={indexChoice}
                                    choice={choice}
                                    handleDeleteChoice={handleDeleteChoice}
                                    handleQuestionChoicesChange={(e) => handleQuestionChoicesChange(e, indexChoice)}
                                />
                            ))}

                            <Row className="mb-3">
                                <Form.Group as={Col} md="10">
                                    <Form.Label >Answer</Form.Label>
                                    <Col style={{ display: "flex" }}>
                                        <Form.Control
                                            type='text'
                                            name='qAnswer'
                                            value={quiz.qAnswer}
                                            onChange={(e) => handleQuizChange({ ...quiz, qAnswer: e.target.value })}
                                            placeholder='e.g Answer'
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                            </Row>

                            <Button variant="danger" onClick={handleDeleteQuiz}>Delete Quiz</Button>
                        </Form>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

