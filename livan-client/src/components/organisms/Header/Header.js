import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Logo, Menu, Button } from 'components';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header')}>
            <div className={cx('wrapper-item')}>
                <div>
                    <Logo />
                </div>
                <div className={cx('right-side')}>
                    <Menu/>
                    <Button invert className={cx('login-button')}>Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;