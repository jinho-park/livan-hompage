import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Logo, Menu} from 'components';

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
                </div>
            </div>
        </div>
    );
}

export default Header;