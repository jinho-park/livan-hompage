import React from 'react';
import { Pagetemplate, Board } from 'components';
import { HeaderContainer } from 'containers';

const BoardPage = () =>{
    var arr = document.URL.split('/');
    console.log(arr[3]);
    return (
        <Pagetemplate header={<HeaderContainer/>}>
            <Board title={arr[3]}>
                
            </Board>
        </Pagetemplate>
    )
}

export default BoardPage;