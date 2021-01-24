import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Links from './components/Links';
import Gallery from './components/Gallery';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './App.css'

class App extends Component {    
  
  
  constructor(props)
  {
      document.title = "JDella1996's Website";
      
      super(props); 
  }
  
  render() {


    return (
        <div>
        <BrowserRouter>     
          <Navigation />
          <Route render = {({location}) => (
            <TransitionGroup>
              <CSSTransition 
              timeout={500} 
              classNames = "fade"
              key={location.key}
              >
                <Switch location = {location}>
                    <Route path="/JDella1996.net" component={Home} exact/>
                    <Route path="/links" component={Links} exact/>
                    <Route path="/gallery" component={Gallery} exact/>
                    <Route component={Error}/>
                  </Switch>
             </CSSTransition>
           </TransitionGroup>
          )}/>

      </BrowserRouter>    

        </div> 
     );
  }
}
 
export default App;