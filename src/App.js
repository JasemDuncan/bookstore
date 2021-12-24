import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
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
        {' '}
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Bookstore CMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">BOOKS</Nav.Link>
            <Nav.Link href="/Categories">CATEGORIES</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <Router>
            <div className="Row">
              <Routes>
                <Route path="/" element={<Books />} />
                <Route path="Categories" element={<Categories />} />
              </Routes>
            </div>
          </Router>
        </Container>
      </>
    );
  }
}
export default App;
