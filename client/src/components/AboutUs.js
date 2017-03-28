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
      <Tabs defaultSelectedIndex={1} justified={true}>
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

                   <Container fluid={true} className='centered'>
                     <div className="mui--text-display2">Mission</div>

                     <br/>
                     <br/>
                     <br/>

                     <div className="mui--text-display2">Vision</div>

                     <br/>
                     <br/>
                     <br/>

                     <div className="mui--text-display2">Values</div>

                     <br/>

                     <ul className="mui-list--unstyled">
                               <li>
                                  <h3 className="black" className="black">Time Well Spent</h3>
                                  <h5>Everything we produce will be focused on this ideal. How do you get as much value out of technology while spending the least amount of time on it. Technology should be a way to enhance our real lives, not distract us from it. We know parents and really any person in today’s society is strapped for time.</h5>
                               </li>
                               <br/>
                               <li>
                                   <h3 className="black">HAPPI (Tiny) Habits</h3>
                                   <h5>Baby steps are the optimal way to take on a new intentional habit. Because we already have so much distraction in our lives, the most difficult thing you can do is develop a daily habit. We recommend you pick something that you want to do i.e. Stretch, Be more grateful, Meditate and add these habits onto something you already do within your existing daily routine (brush your teeth, sit down for dinner, go to sleep). Ex. Stretch for 1 minute after I brush my teeth, say 1 thing I’m grateful for at the dinner table, take 3 deep breaths when I first slip into bed. </h5>
                                </li>
                                <br/>
                               <li>
                                   <h3 className="black">Connection</h3>
                                   <h5>This encompasses connection with our inner-selves, our family/friends and our community. The more we connect offline, the more it allows us to connect online more mindfully.</h5>
                                </li>
                                <br/>
                               <li>
                                   <h3 className="black">Radical Self-Love</h3>
                                   <h5>Nothing is more important than seeing yourself in a positive light because that is the light that you reflect onto others. If you can’t love yourself then you can’t be what you need to be for your children. If you feel that way, then please ask for help! </h5>
                                </li>
                                <br/>
                               <li>
                                   <h3 className="black">Creativity</h3>
                                   <h5>Every human being is innately creative and when we find something we love it becomes so much easier to tap into this creativity. Because we are conditioned into a culture of consumption, YOUR creativity is more necessary than ever. </h5>
                                </li>
                                <br/>
                               <li>
                                   <h3 className="black">Adaptability to change</h3>
                                   <h5>The human species survival is predicated on our adaptability to change because the one thing that remains constant is change. Now that technology is accelerating faster than ever, we need to adapt faster than ever. Once we accept this fact, we can stop fighting the current and flow with it. </h5>
                                </li>
                                 <br/>
                                <li>
                                    <h3 className="black">Loving Support System</h3>
                                    <h5>Make sure that you have people around you who truly love you because it has never stopped being true that it takes a village to raise a child. If you don’t have that support around you, we will do what we can to help! </h5>
                                 </li>
                                 <br/>
                                <li>
                                    <h3 className="black">Gratitude</h3>
                                    <h5>This is the foundation for happiness. Every experience in our life is never black and white, even the best circumstances have a negative aspect and all negative experiences give us something to be grateful for. Let us celebrate our wins and losses because at the very least there is a lesson to be learned . </h5>
                                 </li>
                                  <br/>
                                 <li>
                                     <h3 className="black">Patience</h3>
                                     <h5>Because we are conditioned for a culture of speed in our on-demand world, it's easiest to respond to instant gratification while we disregard most things that give us the true happiness of delayed gratification. This conditioning also results in many situations where we become reactive emotionally instead of mindful. Patience has always been a virtue but it has become much harder to attain in our distracted digital age. It is important that we cultivate this skill as we strive to be better. </h5>
                                  </li>
                                  <br/>
                                 <li>
                                     <h3 className="black">Curiosity</h3>
                                     <h5>The smartest people are not the ones who claim to know everything but those that ask questions when they don’t understand. Curiosity is something that we have in spades as children but it easy to lose as a parent, yet curiosity never stops being important. Each new idea actively engages our mind and opens our world to new possibilities.  </h5>
                                  </li>
                                   <br/>
                                  <li>
                                      <h3 className="black">Inclusivity</h3>
                                      <h5>It is important that we can take the information we cover and condense it into a format that appeals to a broad audience at no cost. If you love what we do, we certainly won't turn down a donation :). </h5>
                                   </li>
                                   <br/>
                                  <li>
                                      <h3 className="black">Provide Service to others</h3>
                                      <h5>It has always been true that is feels better to give than receive. Make sure you use your wonderful talents to help those who need it whether it be a family member, friend or a random act of kindness with a stranger.  </h5>
                                   </li>
                                    <br/>
                                   <li>
                                       <h3 className="black">Global Citizenship</h3>
                                       <h5>We should never think of things in terms of how this affects our country, but how does this affect our world. We are all one race and the more perspectives we can understand, the more empathy we can create in this world.  </h5>
                                    </li>
                                    <br/>
                                   <li>
                                       <h3 className="black">BE YOU!</h3>
                                       <h5>Each person in our world is unique in someway and we will never be afraid to show our true selves. “Always be yourself because the people who mind don’t matter and the people who matter don’t mind”. </h5>
                                    </li>
                      </ul>


                   </Container>

            </div>
  );
};
