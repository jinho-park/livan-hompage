import React from 'react';
import style from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const Button = ({children}) => {
    return(
        <div className={cx('button')}>
            {children}
        </div>
    );
}

export default Button;