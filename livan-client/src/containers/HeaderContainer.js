import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
import * as authActions from 'store/modules/auth';
import { Header } from 'components';
import { throttle } from 'lodash';

class HeaderContainer extends Component{
    state = {
        shadow: false
      }
    
    handleScroll = throttle((e) => {
        const { scrollTop } = document.documentElement;
        const shadow = scrollTop !== 0;
        if(this.state.shadow !== shadow) {
            this.setState({
                shadow
            });
        }
    }, 500);

    handleLoginButton = () => {
        const { BaseActions, AuthActions } = this.props;
        BaseActions.setScreenMaskVisibility(true);
        AuthActions.toggleLoginModal();
        AuthActions.setModalMode('login');
    }

    handleLogoutButton = () => {
        
    }

    render() {
        const { handleLoginButton, handleLogoutButton } = this;
        const { shadow, login } = this.state;

        return (
            <Header
                onLoginHandle={handleLoginButton}
                shadow={shadow}
                login={login}
                onLogoutHandle={handleLogoutButton}
            />
        );
    }
}

export default connect(
    (state) => ({
        userMenu: state.base.getIn(['header', 'userMenu']),
        login : state.auth.getIn('loginResult')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(HeaderContainer);