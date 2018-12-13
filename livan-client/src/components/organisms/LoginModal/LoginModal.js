import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import { Modal, Input, Button, SocialLoginButton, InputError } from 'components';
const cx = classNames.bind(styles);

const LoginModal = ({
  visible, 
  mode, 
  forms,
  error,
  onChangeInput,
  onChangeMode,
  onLogin,
  onRegister,
  onSocialLogin,
  onClose,
  onKeyPress
}) => {
  
  const {
    email,
    password,
  } = forms.toJS();

  const {
    email: emailError,
    password: passwordError,
    localLogin: localLoginError
  } = error ? error.toJS() : { };

  return (
    <Modal visible={visible} mobileFullscreen>
      <div className={cx('login-modal')}>
        <div className={cx('close')} onClick={onClose}>✕</div>
        <div className={cx('content')}>
          <h3>이메일로 로그인</h3>
          <InputError error={localLoginError} noMarginTop/>
          <div className={cx('form')}>
            <Input 
              value={email}
              onChange={onChangeInput}
              name="email" 
              fullWidth big 
              placeholder="이메일"/>
              <InputError error={emailError}/>
            <Input 
              value={password}
              onChange={onChangeInput}
              name="password" 
              fullWidth big 
              placeholder="비밀번호" 
              type="password"
              onKeyPress={onKeyPress}/>
              <InputError error={passwordError}/>
          </div>
          <Button 
            flat color="teal" 
            flex padding="0.6rem"
            className={cx('login')}
            onClick={onLogin}>로그인
          </Button>
          <div className={cx('login-foot')}>
            <div className={cx('password')}>
              <Button flex flat>비밀번호 찾기</Button>
            </div>
            <div className={cx('register')}>
              <Button flex flat onClick={onRegister}>회원가입</Button>
            </div>
          </div>
          <div className={cx('separator')}>
            <div className={cx('or')}>OR</div>
          </div>
          <h3>소셜 계정으로 로그인</h3>
          <SocialLoginButton onSocialLogin={onSocialLogin}/>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;