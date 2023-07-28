import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function SignupForm() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
  
    const handleSignUp = (event) => {
        event.preventDefault();

        // 서버로 보낼 데이터를 객체로 만듭니다.
        const signUpData = {
          email: email,
          password: password,
          nickname: nickname,
        };

         // 서버에 회원가입 요청을 보냅니다.
        axios.post('/api/auth/signup', signUpData)
             .then(response => {
                // 회원가입 성공 시 처리
                console.log('회원가입 성공!');
                alert('회원가입 성공!');
                navigate('/login');
             })
             .catch(error => {
             // 회원가입 실패 시 처리
             console.error('회원가입 실패:', error);
             alert('회원가입 실패');
             });
    }

        
  return (
    <div>
    <Container className="panel">
    <h1 className='mb-3'>회원가입</h1>
        <Form>
        {/* controlId="formPlaintextPassword" */}
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <Form.Control type="email" placeholder="email" value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <Form.Control type="password" placeholder="Password" value={password}
                                 onChange={(e) => setPassword(e.target.value)}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <Form.Control type="text" placeholder="nickname" value={nickname}
                                 onChange={(e) => setNickname(e.target.value)}/>
                </Col>
            </Form.Group>
            
            <br/>

            <div className="d-grid gap-1">
                <Button variant="secondary" type="submit" onClick={handleSignUp}>
                    Sign Up
                </Button>
            </div>
        </Form>
    </Container>
</div>
  )
}

export default SignupForm