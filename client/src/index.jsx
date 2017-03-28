import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App.js';

import AboutUs from './components/AboutUs.js';
import OurTeam from './components/OurTeam.js';
import Blog from './components/Blog.js';
import Podcast from './components/Podcast.js';
import Donate from './components/Donate.js';
import ContactUs from './components/ContactUs.js';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/ourteam" component={OurTeam} />
      <Route path="/blog" component={Blog} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/donate" component={Donate} />
      <Route path="/contactus" component={ContactUs} />
    </Route>
  </Router>
), document.querySelector('.scene-container'));
