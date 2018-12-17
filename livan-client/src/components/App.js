import React, {Component} from 'react';
import { HomePage, BoardPage, IntroPage, RegisterPage } from 'components';
import { ScreenMaskContainer, LoginModalContainer, RegisterModalContainer } from 'containers';
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
                <Route path="/register" component={RegisterPage}/>
                <ScreenMaskContainer/>
                <LoginModalContainer/>
                <RegisterModalContainer/>
            </div>
        )
    }
}

export default App;