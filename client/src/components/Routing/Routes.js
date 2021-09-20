import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Blog from '../../pages/Blog';
import Experimental from '../../pages/Experimental';



const Routes = props => {
    return (
        <section className='container'>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/experimental' component={Experimental}/>
                <Route exact path='/blog' component={Blog}/>

            </Switch>
        </section>
    )
}

export default Routes
