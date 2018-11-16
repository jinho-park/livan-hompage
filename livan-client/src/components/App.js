import React, {Component} from 'react';
import { HomePage, BoardPage, IntroPage } from 'components';
import { ScreenMaskContainer, LoginModalContainer } from 'containers';
import { Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/about" component={IntroPage}/>
                <Route path="/dev" component={BoardPage}/>
                <Route path="/talk" component={BoardPage}/>
                <Route path="/ect" component={BoardPage}/>
                <ScreenMaskContainer/>
                <LoginModalContainer/>
            </div>
        )
    }
}

export default App;