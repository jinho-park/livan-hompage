import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginModal } from 'components';
import * as baseActions from 'store/modules/base';
import * as authActions from 'store/modules/auth';
import onClickOutside from 'react-onclickoutside';

import { withRouter } from 'react-router';
import validate from 'validate.js';

class LoginModalContainer extends Component {

    handleChangeMode = () => {

    }

    handleChangeInput = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({ name, value });
    }

    handleLogin = () => {

    }

    handleRegister = () => {

    }

    handleClickOutside = evt => {
        this.handleClose();
    }

    handleClose = () => {
        const { AuthActions, BaseActions, visible } = this.props;
        if(!visible) return;

        BaseActions.setScreenMaskVisibility(false);
        AuthActions.toggleLoginModal();
    }

    handleKeyPress = (e) => {
        if(e.key !== 'Enter') return;

        const { mode } = this.props;
    }

    handleSocialLogin = () => {

    }

    render(){
        const { visible, mode, form, error, pending } = this.props;
        const { 
            handleChangeMode, 
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
                    mode={mode} 
                    forms={form} 
                    error={error}
                    onChangeInput={handleChangeInput}
                    onChangeMode={handleChangeMode}
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
        visible: state.auth.getIn(['modal', 'visible']),
        mode: state.auth.getIn(['modal', 'mode']),
        form: state.auth.get('form'),
        error: state.auth.get('error')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(withRouter(onClickOutside(LoginModalContainer)));