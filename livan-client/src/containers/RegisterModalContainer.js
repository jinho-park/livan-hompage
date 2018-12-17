import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Register } from 'components';
import * as baseActions from 'store/modules/base';
import * as authActions from 'store/modules/auth';
import onClickOutside from 'react-onclickoutside';

import { withRouter } from 'react-router';

class LoginModalContainer extends Component {
    handleChangeInput = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.registChangeInput({name, value});
    }

    handleLogin = () => {
        const { BaseActions, AuthActions } = this.props;
        BaseActions.setScreenMaskVisibility(true);
        AuthActions.toggleLoginModal();
        AuthActions.setModalMode('login');
    }

    handleRegister = () => {

    }

    handleClickOutside = evt => {
        this.handleClose();
    }

    handleClose = () => {
        const { AuthActions, BaseActions, visible } = this.props;
        if(!visible) return;

        AuthActions.toggleRegisterModal();
        BaseActions.setScreenMaskVisibility(false);
    }

    handleKeyPress = (e) => {
        if(e.key !== 'Enter') return;

        const { mode } = this.props;
    }

    render(){
        const { visible, form, error } = this.props;
        const { 
            handleChangeInput,
            handleRegister,
            handleClose,
            handleKeyPress,
            handleLogin
        } = this;

        return(
            <div>
                <Register
                    visible={visible} 
                    forms={form} 
                    error={error}
                    onLogin={handleLogin}
                    onChangeInput={handleChangeInput}
                    onRegister={handleRegister}
                    onClose={handleClose}
                    onKeyPress={handleKeyPress}
                />
            </div>
        )
    }
}

export default connect(
    (state) => ({
        visible: state.auth.getIn(['modal', 'registerVisible']),
        mode: state.auth.getIn(['modal', 'mode']),
        form: state.auth.get('regist'),
        error: state.auth.get('error')
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch),
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(withRouter(onClickOutside(LoginModalContainer)));