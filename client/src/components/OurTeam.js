import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import FlatButton from 'material-ui/FlatButton';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';

import Drawer from 'material-ui/Drawer';

import ReactDOM from 'react-dom';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Container from 'muicss/lib/react/container';


export default props => {

  return (
      <div>

      <div className='navBar'>
      <Tabs defaultSelectedIndex={2} justified={true}>
             <Tab className="mui--text-white" value="pane-1" label="Home" onActive={props.onEmailChange}></Tab>
             <Tab className="mui--text-white" value="pane-2" onActive={props.onEmailChange} label="About Us"></Tab>
             <Tab value="pane-3" label="Our team" onActive={props.onEmailChange}></Tab>
             <Tab value="pane-4" label="Blog" onActive={props.onEmailChange}></Tab>
             <Tab value="pane-5" label="Podcast" onActive={props.onEmailChange}></Tab>
             <Tab value="pane-6" label="Donate" onActive={props.onEmailChange}></Tab>
             <Tab value="pane-6" label="Contact Us" onActive={props.onEmailChange}></Tab>
           </Tabs>
      </div>

                   <br/>
                   <br/>
                   <br/>

                   <Container fluid={true} className='centered'>
                     <span>
                       <img className='centered' src={'../img/gabi.jpg'} />
                     </span>
                   </Container>
                   <div className="mui--text-center"><h2>Gabi Jubran</h2><h5 className="black">Founder & CEO</h5></div>

            </div>
  );
};
