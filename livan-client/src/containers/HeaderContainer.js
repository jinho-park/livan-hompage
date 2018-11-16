import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';
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
        const { BaseActions } = this.props;
        BaseActions.setScreenMaskVisibility(true);
    }

    handleLogoutButton = () => {
        
    }

    render() {
        const { handleLoginButton, handleLogoutButton } = this;
        const { shadow } = this.state;

        return (
            <Header
                onLoginHandle={handleLoginButton}
                shadow={shadow}
            />
        );
    }
}

export default connect(
    (state) => ({
        userMenu: state.base.getIn(['header', 'userMenu'])
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
    })
)(HeaderContainer);