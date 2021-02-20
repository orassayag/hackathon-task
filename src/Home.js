import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Home() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">StudyBuddy</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/forming">Find Your Study Buddy</Nav.Link>
                    <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
                </Nav>
                <Form inline>
                    <Nav.Link href="/Signup">Sign Up</Nav.Link>
                    <Nav.Link href="/Login">Sign In</Nav.Link>
                </Form>
            </Navbar>
            <br />
        </>
    )
}

export default Home;
