import React from 'react';
import styles from './SocialLoginButton.scss';
import classNames from 'classnames/bind';
import FacebookIcon from 'react-icons/fa';

const cx = classNames.bind(styles);

const SocialLoginButton = ({onSocialLogin}) => {
  return (
    <div className={cx('social-login-button')}>
      <div className={cx('facebook')} onClick={() => {onSocialLogin('facebook')}}>
        <FacebookIcon/>
      </div>
    </div>
  );
};

export default SocialLoginButton;