const React = require('react');
const Header = require('../header/Header');
const createGlobalStyle = require('styled-components').createGlobalStyle;

const GlobalStyle = createGlobalStyle`
    html {
        color: purple;
    }
`;

module.export = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
        </div>
    );
};
