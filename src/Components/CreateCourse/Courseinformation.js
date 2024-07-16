import { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function CourseInformation({ courseInforData, handleChange, handlePrevious, handleNext, handleImageChange }) {

    const [instructors, setInstructors] = useState([]);
    const [categories, setCategories] = useState([]);
    const { uId } = useParams();
    useEffect(() => {
        fetch("http://localhost:9999/user")
            .then(res => res.json())
            .then(result => {
                const instructorList = result.filter(user => user.id == uId);
                setInstructors(instructorList);
            })
            .catch(err => console.log(err));
        console.log(instructors);

        fetch("http://localhost:9999/category")
            .then(res => res.json())
            .then(res => setCategories(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <h3>Course Information</h3>
            <Form onSubmit={handleNext}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control
                            type='text'
                            name='cName'
                            value={courseInforData.cName || ""}
                            onChange={handleChange}
                            placeholder='e.g Introduction to Data Analysis'
                            required
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            name='cateId'
                            value={courseInforData.cateId || ""}
                            onChange={handleChange}
                        >
                            <option>Select Category</option>
                            {categories.map(category => (
                                <option key={`category-${category.id}`} value={category.id}>{category.cateName}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Label>Instructor</Form.Label>
                        <Form.Select
                            name='instructorId'
                            value={courseInforData.instructorId || ""}
                            onChange={handleChange}
                        >
                            <option >Select Instructor</option>
                            {instructors.map(instructor => (
                                <option key={`instructor-${instructor.id}`} value={instructor.id}>{instructor.uFullName}</option>
                            ))}
                            
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            required
                            name='cDescription'
                            value={courseInforData.cDescription || ""}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" >
                        <Form.Label>Overview</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            required
                            value={courseInforData.cOverview || ""}
                            name='cOverview'
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            required
                            value={courseInforData.cPrice || ""}
                            name='cPrice'
                            onChange={handleChange}
                            type='number'
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required={courseInforData.cImage == null}
                        />
                        {courseInforData.cImage && <img src={courseInforData.cImage} alt="course" className="mt-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
                    </Form.Group>
                </Row>
                <Button variant='outline-success' onClick={handlePrevious} disabled>Previous</Button> &nbsp; &nbsp;
                <Button variant='outline-success'  type='submit'>Next</Button>
            </Form>
        </Container>
    );
}
