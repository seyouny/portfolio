import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./pages/projects"
import Resume from "./pages/resume"
import Main from "./pages/main"
import Contact from "./pages/links"

import './App.css';
// import "./components/card/node_modules/react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


function App() {
  return (
    <Router>
      <div>
        <Switch>
         {/* <Route path={process.env.PUBLIC_URL} components={Main}/> */}
          <Route exact path="/" component={Main}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/links" component={Contact}/>

        </Switch>
       
      </div>
    </Router>
  )
}

export default App;
