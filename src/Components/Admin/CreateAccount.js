import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate,Link } from 'react-router-dom';
export default function CreateAccount() {
    const [roles, setRoles] = useState([]);
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        email: '',
        rId: '',
        uMail: '',
        uDate: '',
        uGender: '',
        uFullName: '',
        uPhone: '',
        uMajor: '',
        uImage: ''
    });

    useEffect(() => {
        fetch("http://localhost:9999/role")
            .then(res => res.json())
            .then(result => {
                const filteredRoles = result.filter(role => role.rName !== 'admin');
                setRoles(filteredRoles);
            })
            .catch(error => console.log(error));
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    }




    function validateForm() {
        const {
            username, password, email, rId, uMail, uDate, uGender, uFullName, uPhone, uMajor, uImage
        } = formState;
        return (
            username.trim() !== '' &&
            password.trim() !== '' &&
            email.trim() !== '' &&
            rId.trim() !== '' &&
            uMail.trim() !== '' &&
            uDate.trim() !== '' &&
            uGender.trim() !== '' &&
            uFullName.trim() !== '' &&
            uPhone.trim() !== '' &&
            uMajor.trim() !== '' &&
            uImage.trim() !== '/image/CourseList/Account.png'
        );
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) {
            alert("Please fill in all required fields.");
            return;
        }
    
        try {
         
            const accountResponse = await fetch("http://localhost:9999/account");
            const accounts = await accountResponse.json();
            
            
            const maxAccountId = accounts.reduce((maxId, account) => {
                const accountId = parseInt(account.id);
                return accountId > maxId ? accountId : maxId;
            }, 0);
    
           
            const newAccountId = maxAccountId + 1;
    
        
            const createdAccountResponse = await fetch("http://localhost:9999/account", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: newAccountId.toString(),  
                    username: formState.username,
                    password: formState.password,
                    email: formState.email,
                    rId: formState.rId,
                    status: true
                })
            });
            const createdAccountData = await createdAccountResponse.json();
    
           
            const userResponse = await fetch("http://localhost:9999/user");
            const users = await userResponse.json();
    
           
            const maxUserId = users.reduce((maxId, user) => {
                const userId = parseInt(user.id);
                return userId > maxId ? userId : maxId;
            }, 0);
    
           
            const newUserId = maxUserId + 1;
    
          
            const createdUserResponse = await fetch("http://localhost:9999/user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: newUserId.toString(),  
                    uMail: formState.uMail,
                    uDate: formState.uDate,
                    uGender: formState.uGender,
                    uFullName: formState.uFullName,
                    uPhone: formState.uPhone,
                    uMajor: formState.uMajor,
                    uImage: formState.uImage,
                    aId: createdAccountData.id,
                    rId: formState.rId
                })
            });
            await createdUserResponse.json();
    
            alert('Instructor account and user profile created successfully');
            navigate('/admin');
       
            setFormState({
                username: '',
                password: '',
                email: '',
                rId: '',
                uMail: '',
                uDate: '',
                uGender: '',
                uFullName: '',
                uPhone: '',
                uMajor: '',
                uImage: ''
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Container>
            <Link to="/admin" className="btn btn-primary">
                        Back to Admin dashboard
                    </Link>
       
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2>Create Account</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={formState.username}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={formState.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formRole">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                as="select"
                                name="rId"
                                value={formState.rId || ''}
                                onChange={handleChange}
                                required
                            >
                                <option value="">--Choose role--</option>
                                {roles.map(role => (
                                    <option key={role.id} value={role.id}>
                                        {role.rName}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formUserMail">
                            <Form.Label>User Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter user email"
                                name="uMail"
                                value={formState.uMail}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formUserDate">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="uDate"
                                value={formState.uDate}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formUserGender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                as="select"
                                name="uGender"
                                value={formState.uGender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formUserFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter full name"
                                name="uFullName"
                                value={formState.uFullName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formUserPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone number"
                                name="uPhone"
                                value={formState.uPhone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formUserMajor">
                            <Form.Label>Major</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter major"
                                name="uMajor"
                                value={formState.uMajor}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Create Account
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
