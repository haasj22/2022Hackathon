import React from 'react';
import styled from 'styled-components';
import MyWidget from './components/Widget/MyWidget';

const AppWrapper = styled.div`
    text-align: center;
`;

const AppHeader = styled.h1`
    color: cornflowerblue;
`;

function App() {
    return (
        <AppWrapper>
            <AppHeader>LifeAt Widget</AppHeader>
            <MyWidget />
        </AppWrapper>
    );
}

export default App;
