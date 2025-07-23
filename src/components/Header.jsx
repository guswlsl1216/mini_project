import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header ()  {
  
 const navigate = useNavigate();


  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={ () => { navigate('/')}}>Home🏡</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ () => { navigate('/Today')}}>오늘 기록✏</Nav.Link>      
            <Nav.Link onClick={ () => { navigate('/Breath')}}>마음 챙김💚</Nav.Link>
            <Nav.Link onClick={ () => { navigate('/Stories')}}>공유 일기📖</Nav.Link>
            <Nav.Link onClick={ () => { navigate('/Feels')}}>감정 루틴💊</Nav.Link>
            <Nav.Link onClick={ () => { navigate('/Test')}}>테스트📜</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  ) 
}


// 오늘 기록 : Today, 마음 챙김 : Breath , 공유 일기 : Stories , 감정 루틴 Feel




export default Header;