import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Inicio from './Inicio.js';
import AboutUs from './AboutUs.js';
import OurTeam from './OurTeam.js';
import Blog from './Blog.js';
import Podcast from './Podcast.js';
import Donate from './Donate.js';
import ContactUs from './ContactUs.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      open: false
    };
  }

  componentDidMount () {
  }

  componentDidUpdate () {
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  onEmailChange() {
    let route = arguments[0].props.label.toLowerCase();
    console.log(route, 'called');

    if (route.split('').includes(' ')) {
      route = route
              .split('')
              .filter(function(val) {
                return val !== ' ';
              })
              .join('');
    }

    if (route === 'home') {
      this.props.router.replace('/');
    } else {
      this.props.router.replace('/' + route);
    }
  }

  portfolioChange(route) {
    if (route === 'immerse') {
      window.location = 'https://www.github.com/francoabaroa/escape-reality';
    } else {
      window.location = 'https://www.github.com/francoabaroa/' + route;
    }
  }


  render () {
    let self = this;
    let vrView = '';

    if (this.props.router.location.pathname.indexOf('/aboutus') >= 0) {
      console.log('this is rerendering PORT');
      return (
              <AboutUs onEmailChange={this.onEmailChange.bind(this)} portfolioChange={this.portfolioChange.bind(this)} router={self.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/ourteam') >= 0) {
      console.log('this is rerendering OurTeam');
      return (
              <OurTeam onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/blog') >= 0) {
      console.log('this is rerendering Blog');
      return (
              <Blog onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/podcast') >= 0) {
      console.log('this is rerendering Podcast');
      return (
              <Podcast onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/donate') >= 0) {
      console.log('this is rerendering Donate');
      return (
              <Donate onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/contactus') >= 0) {
      console.log('this is rerendering CONTACT');
      return (
              <ContactUs onEmailChange={this.onEmailChange.bind(this)} router={this.props.router}/>
      );

    } else if (this.props.router.location.pathname.indexOf('/') >= 0) {
      console.log('this is rerendering Inicio');
      return (
              <Inicio onEmailChange={this.onEmailChange.bind(this)} router={this.props.router} />
      );

    }
  }
}


export default withRouter(App, { withRef: true });