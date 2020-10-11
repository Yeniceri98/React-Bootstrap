import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Image from '../assets/image1.jpg'; 


const Styles = styled.div`
    .jumbo {
        background: url(${Image}) no-repeat fixed bottom;
        background-size: cover;
        color: white;
        height: 200px;
        position: relative;
        z-index: -2;
        text-align: center;
    }

    .overlay {
        opacity: 1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
    }
`;


export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
                <Container>
                    <h1>Welcome</h1>
                    <p>This is a website of Ahmet Sami Yeniçeri</p>
                </Container>
            </div>
        </Jumbo>
    </Styles>
)