import React from 'react';
import styles from './MenuItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MenuItem = ({children}, onClick) => {
    return (
        <div className={cx('menu-item')} onClick={onClick}>
            {children}
        </div>
    )
}

export default MenuItem;