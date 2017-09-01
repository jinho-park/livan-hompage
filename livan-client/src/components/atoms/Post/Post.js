import React from 'react';
import styles from './Post.scss';
import classNames from 'classnames/bind';
import { Title } from 'components';

const cx = classNames.bind(styles);

const Post = ({children, item}) =>{
    return(
        <div className={cx('post')}>
            <Title>{item}</Title>
            {children}
        </div>
    )
}

export default Post;