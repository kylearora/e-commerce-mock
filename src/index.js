import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './components/App';
import Home from './components/Home'
import BaseLayout from './components/BaseLayout'
import Snowboards from './components/Snowboards'
import SnowboardDetail from './components/SnowboardDetail'
import Skis from './components/Skis'
import SkiDetail from './components/SkiDetail'
import Accessories from './components/Accessories'
import AccessoryDetail from './components/AccessoryDetail'
import About from './components/About'
import Contact from './components/Contact'

ReactDOM.render(


<Router>

  <App>

      <BaseLayout>

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/snowboards" component={Snowboards}></Route>
        <Route path="/snowboards/:id" component={SnowboardDetail}></Route>
        <Route exact path="/skis" component={Skis}></Route>
        <Route path="/skis/:id" component={SkiDetail}></Route>
        <Route exact path="/accessories" component={Accessories}></Route>
        <Route path="/accessories/:id" component={AccessoryDetail}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>


      </BaseLayout>

  </App>

</Router>



, document.getElementById('root'));
registerServiceWorker();
