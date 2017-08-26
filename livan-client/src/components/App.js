import React, {Component} from 'react';
import { HomePage, BoardPage } from '../components';
import '../styles/main.scss';
import { Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/About" component={BoardPage}/>
            </div>
        )
    }
}

export default App;