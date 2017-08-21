import React, {Component } from 'react';
import styles from './styles.scss';
import {header} from 'components';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HomePage = () => {
    return (
        <div className={cx('')}>
            <header></header>
        </div>
    )
}

export default HomePage;