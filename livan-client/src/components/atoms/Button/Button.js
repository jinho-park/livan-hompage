import React from 'react';
import style from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Button = ({
    children,
    invert,
    className,
    onClick
}) => {
    return(
        <div className={cx('button', {invert}, className)} onClick={onClick}>
            {children}
        </div>
    );
}

export default Button;