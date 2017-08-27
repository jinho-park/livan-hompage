import React from 'react';
import styles from './Post.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Post = ({children}) =>{
    return(
        <div className={cx('post')}>
            {children}
        </div>
    )
}

export default Post;