import React from 'react';
import classNames from 'classnames/bind';
import styles from './Board.scss';

const cx = classNames.bind(styles);

const Board = ({children}) => {
    return (
        <div className={cx('board')}>
            aa
            {children}
        </div>
    )
}

export default Board;