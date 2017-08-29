import React from 'react';
import classNames from 'classnames/bind';
import styles from './Title.scss';

const cx = classNames.bind(styles);

const Title = ({children}) => {
    return (
        <div className={cx('title')}>
            {children}
        </div>
    )
}

export default Title;