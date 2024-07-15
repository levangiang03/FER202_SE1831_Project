import { useState } from 'react';
import { Form, Row, Col, Accordion, Button } from 'react-bootstrap';

export default function Video({ index, video, handleVideoChange, handleDeleteVideo }) {
    const [showVideo, setShowVideo] = useState(false);

    // Function to extract video ID from YouTube URL
    const getVideoId = (url) => {
        const match = url.match(/[?&]v=([^&]+)/);
        return match && match[1];
    }

    const isValidYoutubeUrl = (url) => {
        // Regular expression to match YouTube URL format
        const youtubeRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com\/watch\?v=).+$/;
        return youtubeRegex.test(url);
    }

    return (
        <Accordion style={{ marginBottom: "10px" }}>
            <Accordion.Item eventKey={`video-${index}`}>
                <Accordion.Header >
                    <Col md={9}>
                        <h6 style={{ marginBottom: "0px" }}>Video {index + 1} </h6>
                    </Col>
                </Accordion.Header>

                <Accordion.Body>
                    <Row>
                        <Form id={`video-form-${index}`}>
                            {/* <Form noValidate validated={validated} id={`video-form-${index}`}> */}
                            <Row className="mb-3">
                                <Form.Group as={Col} md="10">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='videoTitle'
                                        value={video.videoTitle}
                                        //BEGINING CODE
                                        // onChange={(e) => handleVideoChange(e, index)}

                                        //TEST CODE
                                        onChange={(e) => handleVideoChange({ ...video, videoTitle: e.target.value })}
                                        placeholder='e.g Introduction to Data Analysis'
                                        required
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="10">
                                    <Form.Label >Video URL</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='videoUrl'
                                        value={video.videoUrl}
                                        //BEGINING CODE
                                        // onChange={(e) => handleVideoChange(e, index)}

                                        // TEST CODE
                                        onChange={(e) => handleVideoChange({ ...video, videoUrl: e.target.value })}
                                        placeholder='e.g https://www.youtube.com/watch?v=...'
                                        required
                                    // isInvalid={isValidYoutubeUrl(video.videoUrl) == false}
                                    />
                                </Form.Group>
                            </Row>

                            {isValidYoutubeUrl(video.videoUrl) && (
                                <Row className="mb-3">
                                    <Col>
                                        <Button onClick={() => setShowVideo(true)}>Watch Video</Button>
                                    </Col>
                                </Row>
                            )}

                            {showVideo && isValidYoutubeUrl(video.videoUrl) && (
                                <Row className="mb-3">
                                    <Col>
                                        <iframe
                                            width="100%"
                                            height="315"
                                            src={`https://www.youtube.com/embed/${getVideoId(video.videoUrl)}`}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </Col>
                                </Row>
                            )}
                            <Row>
                                {/* <Col>
                                    <Button type="submit">Save</Button>
                                </Col> */}
                                <Col>
                                    {/* BEGINING CODE */}
                                    {/* <Button variant="danger" onClick={() => handleDeleteVideo(index)}>Delete</Button> */}

                                    {/* TEST CODE */}
                                    <Button variant="danger" onClick={handleDeleteVideo}>Delete Video</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    );
}