import React from 'react';
import styles from './MenuItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MenuItem = ({children, url}) => {
    return (
        <a className={cx('menu-item')} href={url}>
            {children}
        </a>
    )
}

export default MenuItem;