import React, {Component} from 'react';
import { HomePage } from '../components';
import '../styles/main.scss';
import { Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomePage}/>
            </div>
        )
    }
}

export default App;