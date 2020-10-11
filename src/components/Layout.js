import React from 'react';
import Container from 'react-bootstrap/Container';


export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)


/*
    Container'ı tanımlayıp App.js kısmında <Layout> tag'inin tüm elemanları kapsayacak şekilde yerleştirdik
    Bu şekilde sayfa yapısı biraz daha düzeldi (Bootstrap'taki container class'ıyla aynı işlev)
*/