import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <div>
              Bookstore CMS
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Books</Link>
                </li>
                <li>
                  <Link to="/Categories">Categories</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="Categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
