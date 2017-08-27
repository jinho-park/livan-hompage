import React from 'react';
import styles from './Menu.scss';
import { MenuItem } from 'components';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Menu = () => {
    return(
        <div className={cx('menu-box')}>
            <MenuItem url={"/about"}>About</MenuItem>
            <MenuItem url={"/dev"}>Dev</MenuItem>
            <MenuItem url={"/talk"}>Talk</MenuItem>
            <MenuItem url={"/ect"}>Ect</MenuItem>
        </div>
    );
}

export default Menu;