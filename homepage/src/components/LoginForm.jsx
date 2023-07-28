import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React, { useState,useRef, useContext, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function LoginForm() {

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  let navigate = useNavigate ();  // Q. let 으로 왜 했을까???
  const [isLoading, setIsLoading] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies();

  // 로그인 핸들러 함수
  const handleLogin = async (event)  => {
    event.preventDefault(); // preventDefault 의 용도는???

      // 로그인 요청에 사용할 데이터를 객체로 만듭니다.
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const jsonContent = process.env.REACT_APP_API_JSON_CONTENT;

    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type": jsonContent,
      },
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      })
    })
    .then(res => {
      console.log('res.status: ', res.status);
      if (res.status !== 200) {
        return alert('로그인에 실패하였습니다. 다시 시도해주세요~');
      } 
      return res.json();
    })
    .then(data => {      
      if (data) {
        // localStorage.setItem('token', data.accessToken);
        // localStorage.setItem('expirationTime', String(data.tokenExpiresIn));
        removeCookie('token');
        
        const expireTimeDate = new Date(Number(data.tokenExpiresIn));
        // console.log('expireTime: ', expireTimeDate.toLocaleString());
        setCookie('token', data.accessToken, { expires: expireTimeDate });

        navigate('/');
      }
    });
  };  
   
  return (
    <Container className="panel">
      <h1 className='mb-3'>로그인</h1>
        <Form onSubmit={handleLogin}>
            <Form.Group as={Row} className="mb-3" >  
                <Col sm>
                    <Form.Control type="email" placeholder="Email address" required ref={emailInputRef} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <Form.Control type="password" placeholder="Password"  required ref={passwordInputRef}  />
                </Col>
            </Form.Group>
            <br/>

            <div className="d-grid gap-1">
                <Button variant="secondary" type="submit">
                    Sign In
                </Button>
            </div>
        </Form>
    </Container>
  )
}

export default LoginForm