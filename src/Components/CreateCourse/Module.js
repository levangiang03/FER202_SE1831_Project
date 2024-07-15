import React, { useState } from 'react';
import { Accordion, Button, Row, Col, Form } from 'react-bootstrap';
import Video from './Video';
import Quiz from './Quiz';


export default function Module(props) {

    const {indexModule} = props;
    const {module} = props;
    const {handleAddVideoToModule} = props;

    const {handleDeleteVideoFromModule} = props;
    const {handleVideoChangeInModule} = props;
    const {handleDeleteModule} = props;

    const {handleAddQuizToModule} = props;
    const {handleChangeQuizInModule} = props;
    const {handleDeleteQuizFromModule} = props;
    //TEST CODE 

    const [videos, setVideos] = useState(module.cVideo || []);

    const [quizzes, setQuizzes] = useState(module.cQuiz || []);


    //TEST CODE 11/7 6:36 FROM HERE
    const handleAddQuiz = () => {
        const newQuizId = quizzes.length > 0 ? quizzes[quizzes.length - 1].qId + 1 : 1;
        const newQuiz = { qId: newQuizId, qQuestion: '', qChoice: [], qAnswer: '' };
        setQuizzes([...quizzes, newQuiz]);
        handleAddQuizToModule(module.id, newQuiz);
    };

    // Function to delete a quiz from the module
    const handleDeleteQuiz = (index) => {
        const updatedQuizzes = quizzes.filter((_, i) => i !== index);
        setQuizzes(updatedQuizzes);
        handleDeleteQuizFromModule(module.id, index);
    };

    // Function to handle changes in quiz details within the module
    const handleQuizChange = (index, updatedQuiz) => {
        const updatedQuizzes = quizzes.map((quiz, i) =>
            i === index ? updatedQuiz : quiz
        );
        setQuizzes(updatedQuizzes);
        handleChangeQuizInModule(module.id, updatedQuizzes);
    };
    //TO HERE

    // Function to add a video to the module
    const handleAddVideo = () => {
        const newVideoId = videos.length > 0 ? videos[videos.length - 1].videoId + 1 : 1;
        const newVideo = { videoId: newVideoId, videoTitle: '', videoUrl: '' };
        setVideos([...videos, newVideo]);
        handleAddVideoToModule(module.id, newVideo);
    };

    // Function to delete a video from the module
    const handleDeleteVideo = (index) => {
        const updatedVideos = videos.filter((_, i) => i !== index);
        setVideos(updatedVideos);
        handleDeleteVideoFromModule(module.id, index);
    };

    // Function to handle changes in video details within the module
    const handleVideoChange = (index, updatedVideo) => {
        const updatedVideos = videos.map((video, i) =>
            i === index ? updatedVideo : video
        );
        setVideos(updatedVideos);
        handleVideoChangeInModule(module.id, updatedVideos);
    };

    return (
        <Accordion style={{ marginBottom: "10px" }} >
            <Accordion.Item eventKey={`module-${indexModule}`}>
                <Accordion.Header><b>Module {indexModule + 1}</b></Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                            <span><h6 style={{ marginBottom: "0px" }}>Video</h6></span>
                          
                            <Button onClick={handleAddVideo}>Add Video</Button>
                        </Col>
                    </Row>

                    {videos.map((video, indexVideo) => (
                        <Video
                            key={video.id}
                            index={indexVideo}
                            video={video}
                            handleVideoChange={(updatedVideo) => handleVideoChange(indexVideo, updatedVideo)}
                            handleDeleteVideo={() => handleDeleteVideo(indexVideo)}
                        />
                    ))}
                
                    <Row>
                        <Col style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                            <span><h6 style={{ marginBottom: "0px" }}>Quiz</h6></span>

                            <Button onClick={handleAddQuiz}>Add Quiz</Button>
                        </Col>
                    </Row>

                    {/* QUIZ HANDLE */}
                    {
                        quizzes.map((quiz, indexQuiz) => (

                            <Quiz
                                key={quiz.qId}
                                index={indexQuiz}
                                quiz={quiz}
                                handleQuizChange={(updatedQuiz) => handleQuizChange(indexQuiz, updatedQuiz)}
                                handleDeleteQuiz={() => handleDeleteQuiz(indexQuiz)}
                            />
                        ))}
                    <Button variant='danger' onClick={() => handleDeleteModule(module.id)}>Delete Module</Button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );

}



