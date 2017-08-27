import React from 'react';
import { Pagetemplate, Header, PolyBackground, Board, Post } from 'components';

const IntroPage = () => {
    return (
        <Pagetemplate header={<Header/>}>
            <PolyBackground>
                <Board title="About">
                    
                </Board>
            </PolyBackground>
        </Pagetemplate>
    )
}

export default IntroPage;