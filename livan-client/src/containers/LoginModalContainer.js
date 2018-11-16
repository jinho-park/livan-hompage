import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginModal } from 'components';
import * as baseActions from 'store/modules/base';

import { withRouter } from 'react-router';
import validate from 'validate.js';

class LoginModalContainer extends Component {

    handleKeyPress = (e) => {
        if(e.key !== 'Enter') return;

        const { mode } = this.props;
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
                />
            </div>
        )
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({

    })
)(withRouter(LoginModalContainer));