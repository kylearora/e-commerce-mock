import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './components/App';
import Home from './components/Home'
import BaseLayout from './components/BaseLayout'
import Snowboards from './components/Snowboards'
import Skiis from './components/Skiis'
import Accessories from './components/Accessories'
import About from './components/About'
import Contact from './components/Contact'

ReactDOM.render(


<Router>

  <App>

      <BaseLayout>

        <Route exact path="/" component={Home}></Route>
        <Route path="/snowboards" component={Snowboards}></Route>
        <Route path="/skiis" component={Skiis}></Route>
        <Route path="/accessories" component={Accessories}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>


      </BaseLayout>

  </App>

</Router>



, document.getElementById('root'));
registerServiceWorker();