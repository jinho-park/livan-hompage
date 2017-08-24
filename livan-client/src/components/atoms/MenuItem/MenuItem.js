import React from 'react';
import styles from './MenuItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MenuItem = ({children}) => {
    return (
        <div className={cx('menu-item')}>
            {children}
        </div>
    )
}

export default MenuItem;