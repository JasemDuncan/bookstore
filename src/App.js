import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Books from './components/Books';
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="Container">

          {' '}
          <Navbar className="NavBar">
            <Navbar.Brand href="/">Bookstore CMS</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">BOOKS</Nav.Link>
              <Nav.Link href="/Categories">CATEGORIES</Nav.Link>
            </Nav>
          </Navbar>
          <Container>
            <Router>
              <Row>
                <Col>
                  <Routes>
                    <Route path="/" element={<Books />} />
                    <Route path="Categories" element={<Categories />} />
                  </Routes>
                </Col>
              </Row>
            </Router>
          </Container>
        </div>
      </>
    );
  }
}
export default App;
