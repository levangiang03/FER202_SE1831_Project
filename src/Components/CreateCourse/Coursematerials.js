import { useState } from 'react';
import { Container, Form, Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import Module from './Module';


export default function CourseMaterials({ handlePrevious, handleFinalSubmit, handleAddModule, modules, setModules, handleDeleteModule }) {

    //         if (module.id === moduleId) {
    //             return {
    //                 ...module,
    //                 cQuiz: [...module.cQuiz, newQuiz]
    //             };
    //         }
    //         return module;
    //     });
    //     setModules(updatedModules);
    //     console.log(updatedModules);
    // };

    // //Function handle change quiz to Module
    // const handleChangeQuizInModule = (moduleId, updatedQuizes) => {
    //     const updatedModules = modules.map(module => {
    //         if (module.id === moduleId) {
    //             return {
    //                 ...module,
    //                 cQuiz: updatedQuizes
    //             };
    //         }
    //         return module;
    //     });
    //     setModules(updatedModules);
    //     console.log(updatedModules);
    // };

    // //Function handle delete quiz to Module
    // const handleDeleteQuizFromModule = (moduleId, quizIndex) => {
    //     const updatedModules = modules.map(module => {
    //         if (module.id === moduleId) {
    //             const updatedQuizes = module.cQuiz.filter((quiz, index) => index !== quizIndex);
    //             return {
    //                 ...module,
    //                 cQuiz: updatedQuizes
    //             };
    //         }
    //         return module;
    //     });
    //     setModules(updatedModules);
    // };

    // TEST CODE IN 11/7 6:23 PM FROM HERE
    const handleAddQuizToModule = (moduleId, newQuiz) => {
        const updatedModules = modules.map(module => {
            if (module.id === moduleId) {
                return {
                    ...module,
                    cQuiz: [...module.cQuiz, newQuiz]
                };
            }
            return module;
        });
        setModules(updatedModules);
        console.log(updatedModules);
    };

    const handleChangeQuizInModule = (moduleId, updatedQuizzes) => {
        const updatedModules = modules.map(module => {
            if (module.id === moduleId) {
                return {
                    ...module,
                    cQuiz: updatedQuizzes
                };
            }
            return module;
        });
        setModules(updatedModules);
        console.log(updatedModules);
    };

    const handleDeleteQuizFromModule = (moduleId, quizIndex) => {
        const updatedModules = modules.map(module => {
            if (module.id === moduleId) {
                const updatedQuizzes = module.cQuiz.filter((quiz, index) => index !== quizIndex);
                return {
                    ...module,
                    cQuiz: updatedQuizzes
                };
            }
            return module;
        });
        setModules(updatedModules);
    };

    // TO HERE

    //TEST FROM HERE CODE IN 10/7 1:43 PM  
    const handleAddVideoToModule = (moduleId, newVideo) => {
        const updatedModules = modules.map(module => {
            if (module.id === moduleId) {
                return {
                    ...module,
                    cVideo: [...module.cVideo, newVideo]
                };
            }
            return module;
        });
        setModules(updatedModules);
        console.log(updatedModules);
    };

    const handleVideoChangeInModule = (moduleId, updatedVideos) => {
        const updatedModules = modules.map(module => {
            if (module.id === moduleId) {
                return {
                    ...module,
                    cVideo: updatedVideos
                };
            }
            return module;
        });
        setModules(updatedModules);
        console.log(updatedModules);
    };

    const handleDeleteVideoFromModule = (moduleId, videoIndex) => {
        const updatedModules = modules.map(module => {
            if (module.id === moduleId) {
                const updatedVideos = module.cVideo.filter((video, index) => index !== videoIndex);
                return {
                    ...module,
                    cVideo: updatedVideos
                };
            }
            return module;
        });
        setModules(updatedModules);
    };

    // TO HERE
    return (
        <Container>
            <h3>Course Materials</h3>
            <Row>
                <Form onSubmit={handleFinalSubmit}>
                    <Card style={{ border: "none" }}>
                        <Card.Body>
                            <Card.Title style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                Module
                                <Button variant='success' onClick={handleAddModule}>Add module</Button>
                            </Card.Title>

                            <Card.Text>

                                {modules.map((module, indexModule) => (
                                    <Module
                                        key={module.id}
                                        indexModule={indexModule}
                                        module={module}
                                        handleAddVideoToModule={handleAddVideoToModule}
                                        handleVideoChangeInModule={handleVideoChangeInModule}
                                        handleDeleteVideoFromModule={handleDeleteVideoFromModule}
                                        handleDeleteModule={handleDeleteModule}
                                        handleAddQuizToModule={handleAddQuizToModule}
                                        handleChangeQuizInModule={handleChangeQuizInModule}
                                        handleDeleteQuizFromModule={handleDeleteQuizFromModule}

                                    />
                                ))}


                            </Card.Text>
                            <Button variant='outline-success' onClick={handlePrevious}>Previous</Button> &nbsp; &nbsp;
                            <Button variant='outline-success' type='submit' >Submit</Button>

                        </Card.Body>

                    </Card>
                </Form>
            </Row>
        </Container>
    );

}


