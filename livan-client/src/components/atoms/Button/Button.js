import React from 'react';
import style from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Button = ({
    children,
    flex,
    roundCorner,
    invert,
    flat,
    color,
    style,
    padding="0.5rem",
    className,
    onClick
}) => {
    return(
        <div className={cx('button', {
                invert,
                flex,
                flat
            }, className)} onClick={onClick}
            style={{
                padding,
                ...style
            }}
        >
            {children}
        </div>
    );
}

export default Button;