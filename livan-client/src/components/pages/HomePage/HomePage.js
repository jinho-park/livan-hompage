import React from 'react';
import {Pagetemplate, Header, PolyBackground} from 'components';

const HomePage = () => {
    return (
        <Pagetemplate header={<Header/>}>
            <PolyBackground>
                <h1>Welcome Livan's Homepage</h1>
            </PolyBackground>
        </Pagetemplate>
    )
}

export default HomePage;