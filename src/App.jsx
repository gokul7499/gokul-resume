import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from './components/loading';
import Navbar from './components/navbar';
import Certification from './pages/Certification';
import { Toolbar } from '@material-ui/core'; // <-- Add this import

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
      <Toolbar /> {/* <-- Add this line for spacing */}
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/certification" component={Certification} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;