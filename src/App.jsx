import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from './components/loading';
import Navbar from './components/navbar';

const Contacts = lazy(() => import('./pages/contacts'));
const Education = lazy(() => import('./pages/education'));
const Home = lazy(() => import('./pages/home/index'));
const Portfolio = lazy(() => import('./pages/portfolio'));
const Resume = lazy(() => import('./pages/resume'));
const Skills = lazy(() => import('./pages/skills'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/MyResume" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
