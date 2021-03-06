import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginModal } from 'components';
import * as baseActions from 'store/modules/base';
import * as authActions from 'store/modules/auth';
import onClickOutside from 'react-onclickoutside';

import { withRouter } from 'react-router';

class LoginModalContainer extends Component {
    handleChangeInput = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({ name, value });
    }

    handleLogin = () => {
        const { AuthActions } = this.props;

        AuthActions.localLogin();
    }

    handleRegister = () => {
        const { AuthActions, visible } = this.props;
        if(!visible) return;

        AuthActions.toggleRegisterModal();
    }

    handleClickOutside = evt => {
        this.handleClose();
    }

    handleClose = () => {
        const { AuthActions, BaseActions, visible } = this.props;
        if(!visible) return;

        AuthActions.toggleLoginModal();
        BaseActions.setScreenMaskVisibility(false);
    }

    handleKeyPress = (e) => {
        if(e.key !== 'Enter') return;
    }

    handleSocialLogin = () => {

    }

    render(){
        const { visible, form, error } = this.props;
        const { 
            handleChangeInput,
            handleLogin,
            handleRegister,
            handleSocialLogin,
            handleClose,
            handleKeyPress
        } = this;

        return(
            <div>
                <LoginModal
                    visible={visible} 
                    forms={form} 
                    error={error}
                    onChangeInput={handleChangeInput}
                    onLogin={handleLogin}
                    onRegister={handleRegister}
                    onSocialLogin={handleSocialLogin}
                    onClose={handleClose}
                    onKeyPress={handleKeyPress}
                />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        visible: state.auth.getIn(['modal', 'loginVisible']),
        mode: state.auth.getIn(['modal', 'mode']),
        form: state.auth.get('form'),
        error: state.auth.get('error')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(withRouter(onClickOutside(LoginModalContainer)));