import React from 'react';
import classNames from 'classnames/bind';
import styles from './Board.scss';
import { Head } from 'components';

const cx = classNames.bind(styles);

const Board = ({children, title}) => {
    return (
        <div className={cx('board')}>
            <Head title={title}></Head>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}

export default Board;