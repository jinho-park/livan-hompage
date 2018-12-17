import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Logo, Menu, Button } from 'components';

const cx = classNames.bind(styles);

const Header = ({onLoginHandle, shadow, login, onLogoutHandle}) => {
    return (
        <div className={cx('header', { shadow })}>
            <div className={cx('wrapper-item')}>
                <div>
                    <Logo />
                </div>
                <div className={cx('right-side')}>
                    <Menu/>
                    {login ? 
                        <Button 
                            invert 
                            className={cx('login-button')}
                            onClick={onLogoutHandle}
                        >
                            Logout
                        </Button>
                        :
                        <Button 
                            invert 
                            className={cx('login-button')}
                            onClick={onLoginHandle}
                        >
                            Login
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;