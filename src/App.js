import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import { Layout } from './components/Layout';    // "export const" olup "default" olmadığı için { Layout } şeklinde tanımlanmalıdır
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

function App() {
    return (
        <React.Fragment>
           <Router>      
                <NavigationBar />
                <Jumbotron />
                <Layout>    {/* Layout tüm component'leri kapsıyor */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NoMatch} />
                    </Switch>
                </Layout>
            </Router>
        </React.Fragment>
    );
}

export default App;


/*
    _____ REACT BOOTSTRAP SETUP _____
    https://react-bootstrap.github.io/getting-started/introduction/
    npm install react-bootstrap bootstrap
*/
/*
    _____ STYLED COMPONENTS SETUP _____
    https://styled-components.com/docs/basics#installation
    npm install --save styled-components

*/

