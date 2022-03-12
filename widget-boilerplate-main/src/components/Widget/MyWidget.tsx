import React, { useEffect, useState } from "react";
import styled from "styled-components";
import spacetime from 'spacetime';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const WidgetWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: space-between;

    height: 480px;
    width: 1080px;

    margin: auto;

    border: 1px solid black;
    border-radius: 10px;

    fill: black
`;

const WidgetHeader = styled.div`
    border-bottom: 1px solid black;
    
    height: 12%;
    width: 100%;
`;

const WidgetBody = styled.div`
    height: auto;
    width: 100%;
`;

interface MyWidgetProps {

}
export default function MyWidget(props: MyWidgetProps) {


    return (
        <WidgetWrapper>
            <WidgetHeader>
                {/* TODO: */}
            </WidgetHeader>
            
            <WidgetBody>
                {/* TODO */}
            </WidgetBody>

            {/* TODO: optional, create a widget footer */}
        </WidgetWrapper>
    );
}