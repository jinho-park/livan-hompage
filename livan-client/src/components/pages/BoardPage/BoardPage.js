import React from 'react';
import { Pagetemplate, Header, PolyBackground, Board } from 'components';

const BoardPage = () =>{
    var arr = document.URL.split('/');
    console.log(arr[3]);
    return (
        <Pagetemplate header={<Header/>}>
            <PolyBackground>
                <Board title={arr[3]}>
                    
                </Board>
            </PolyBackground>
        </Pagetemplate>
    )
}

export default BoardPage;