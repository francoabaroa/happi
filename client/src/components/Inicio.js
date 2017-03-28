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

        <div className='navBar navbartop'>
        <Tabs defaultSelectedIndex={0} justified={true}>
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

        {/*<Container fluid={true} className='centered'>
          <span>
            <img className='sizeDown' src={'../img/happi1.png'} />
          </span>
        </Container>

        <Container fluid={true} className='centered'>
          <span>
            <img className='' src={'../img/happi2.png'} />
          </span>
        </Container>

        <Container fluid={true} className='centered'>
          <span>
            <img className='' src={'../img/happi3.png'} />
          </span>
        </Container>*/}

        <Container fluid={true} className='centered'>
          <span>
            <img className='' src={'../img/happi2.png'} />
          </span>
        </Container>

{/*}
        <div>
                  <span className="mui--pull-left"><img className='sizeDown' src={'../img/happi2.png'} /></span>
                  <span className="mui--pull-right"><img className='' src={'../img/happi1.png'} /></span>
                  <div className="mui--clearfix"></div>
        </div>


              <h3 className="mui--text-center orange">HAPPI </h3>
              <p className="mui--text-center para"> Helping Awesome Parents Parent Intentionally </p> */}


      </div>
  );
};
