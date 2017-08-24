import React from 'react';
import styles from './Pagetemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Pagetemplate = ({header, children, responsive, padding}) => {
    return (
        <div className={cx('page')}>
            <header>
                {header}
            </header>
            <main className={cx('content', {
                responsive
            })}>
                {children}
            </main>
        </div>
    )
}

export default Pagetemplate;