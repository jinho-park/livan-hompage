import React from 'react';
import { Pagetemplate, Board } from 'components';
import { HeaderContainer } from 'containers';

const ResisterPage = () => {
    return (
        <Pagetemplate header={<HeaderContainer/>}>
            <Board title={"회원가입"}>
            </Board>
        </Pagetemplate>
    )
}

export default ResisterPage;