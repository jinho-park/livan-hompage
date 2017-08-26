import React from 'react';
import { Pagetemplate, Header, PolyBackground, Board } from 'components';

const BoardPage = () =>{
    return (
        <Pagetemplate header={<Header/>}>
            <PolyBackground>
                <Board></Board>
            </PolyBackground>
        </Pagetemplate>
    )
}

export default BoardPage;