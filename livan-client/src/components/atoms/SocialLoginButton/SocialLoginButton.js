import React from 'react';
import styles from './SocialLoginButton.scss';
import classNames from 'classnames/bind';
import * as Icon from 'react-icons/io';

const cx = classNames.bind(styles);

const SocialLoginButton = ({onSocialLogin}) => {
  console.log(Icon);
  return (
    <div className={cx('social-login-button')}>
      <div className={cx('facebook')} onClick={() => {onSocialLogin('facebook')}}>
        <Icon.IoLogoFacebook/>
      </div>
    </div>
  );
};

export default SocialLoginButton;