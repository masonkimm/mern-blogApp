import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';
import Write from './pages/Write/Write';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <TopBar user={user} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Switch>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
        </Switch>
        <Switch>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
        </Switch>
        <Switch>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        </Switch>
        <Switch>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
        </Switch>
        <Switch>
          <Route path="/article/:articleId">
            <Article />
          </Route>
        </Switch>
      </Router>

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
