import React from 'react';
import style from './Logo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Logo = () => {
    return(
        <div className={cx('logo')}>
            Livan
        </div>
    );
}

export default Logo;