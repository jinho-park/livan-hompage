import React from 'react';
import { Pagetemplate, Board, Post } from 'components';
import { HeaderContainer } from 'containers';

const IntroPage = () => {
    return (
        <Pagetemplate header={<HeaderContainer/>}>
            <Board title="About">
                <Post item="박진호">
                    프로그래밍에 관심이 많은 개발자입니다. 여러 분야에 관심이 많으며 해보고 합니다.
                </Post>
                <Post item="Skill">
                    
                </Post>
                <Post item="Project"></Post>
                <Post item="Education">
                    광운대학교 - KwangwoonUniversity(2012 ~ 현재)
                    전자통신공학과
                </Post>
            </Board>
        </Pagetemplate>
    )
}

export default IntroPage;