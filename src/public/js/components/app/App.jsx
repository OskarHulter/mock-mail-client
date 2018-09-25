const React = require('react');
const Header = require('../header/Header');
const Router = require('react-router-dom/BrowserRouter').default;
const Route = require('react-router-dom/Route').default;
const NavigationBar = require('../navigation-bar/NavigationBar');
const Inbox = require('../inbox/Inbox');
const Paths = require('../../config/paths');

// const createGlobalStyle = require('styled-components').createGlobalStyle;
/*
const GlobalStyle = createGlobalStyle`
    html {
        color: purple;
    }
`;
*/
module.export = () => {
    return (
        <Router>
            <div>
                <Header />
                <div className="content">
                    <NavigationBar />
                    <Route exact path={Paths.root} component={Inbox} />
                    <Route path={Paths.inbox} component={Inbox} />
                    <Route path={Paths.important} component={Inbox} />
                    <Route path={Paths.sentMail} component={Inbox} />
                    <Route path={Paths.drafts} component={Inbox} />
                    <Route path={Paths.spam} component={Inbox} />
                </div>
            </div>
        </Router>
    );
};
