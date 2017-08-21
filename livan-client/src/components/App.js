import React, {Component} from 'react';
import { Header } from '../components';
import '../styles/main.scss';
import { Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Header}/>
            </div>
        )
    }
}

export default App;