import React from 'react';
import styles from './Menu.scss';
import { MenuItem } from 'components';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Menu = () => {
    return(
        <div className={cx('menu-box')}>
            <MenuItem>About</MenuItem>
            <MenuItem>Dev</MenuItem>
            <MenuItem>Talk</MenuItem>
            <MenuItem>Ect</MenuItem>
        </div>
    );
}

export default Menu;