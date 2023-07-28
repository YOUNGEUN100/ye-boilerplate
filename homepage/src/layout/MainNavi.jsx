import React,{ useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function MainNavi() {

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const navigate = useNavigate();

  const [nickName, setNickName] = useState('');

  let isLogin = false;
  const cookieToken = cookies.token;
  if (cookieToken) {
    isLogin = true;
  }

  useEffect(() => {
    if(isLogin) {
      const accessToken = 'Bearer ' + cookieToken;
      console.log(accessToken);

      fetch('/api/member/me', {
        method: 'GET',
        headers: {
          "Content-Type": 'appliation/json',
          "Authorization": accessToken,
        },
      }).then(res => {
        if (!(res && res.status === 200)) {
          alert('회원정보를 가져오는데 실패하였습니다. ㅠㅠㅠ');
        }
        return res.json();
      }).then(data => {
        console.log('member/me ', data);
        if (data)
          setNickName(data.nickname);
      });
    }
  }, [isLogin])

  const toggleLogoutHandler = () => {
    removeCookie('token');

    alert('로그아웃 하였습니다.');
    navigate('/', true);
  }
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-style" bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">LOCO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='collapse navbar-collapse justify-content-between'>
        <Nav className="navbar-nav">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About111</Nav.Link>
        </Nav>
        <Nav className="navbar-nav">
          {!isLogin && <Nav.Link as={Link} to="/login">Login</Nav.Link> }
          {!isLogin && <Nav.Link as={Link} to="/signup">Signup</Nav.Link>}
          {isLogin && <Nav.Link as={Link} to="/mypage">{nickName}님 반갑습니다~</Nav.Link>}
          {isLogin && <button onClick={toggleLogoutHandler}>Logout</button>}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MainNavi