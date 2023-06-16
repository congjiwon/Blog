import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogForm from "./components/BlogForm";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            Home page
          </Route>
          <Route path="/blogs">
            <BlogForm></BlogForm>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
