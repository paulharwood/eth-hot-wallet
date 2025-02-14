/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AliasPage from 'containers/AliasPage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <HomePage />
              </Route>
              <Route exact path="/" component={AliasPage} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }

}
function About() {
  return <h1>About</h1>;
}

function Users() {
  return <h1>Users</h1>;
}
