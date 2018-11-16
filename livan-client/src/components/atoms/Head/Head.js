import React from 'react';
import styles from './Head.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Head = ({children, title}) => {
    return (
        <div className={cx('head')}>
            {title}
        </div>
    )
}

export default Head;