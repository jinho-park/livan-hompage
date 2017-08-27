import React from 'react';
import styles from './Head.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Head = ({children, title}) => {
    return (
        <div className={cx('head')}>
            <h1>{title}</h1>
        </div>
    )
}

export default Head;