import React from 'react';
import { Pagetemplate, Board, Register } from 'components';
import { HeaderContainer } from 'containers';

const RegisterPage = () => {
    return (
        <Pagetemplate header={<HeaderContainer/>}>
            <Board title={"회원가입"}>
                <Register/>
            </Board>
        </Pagetemplate>
    )
}

export default RegisterPage;