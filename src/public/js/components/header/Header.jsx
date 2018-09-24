const React = require('react');
const styled = require('styled-components').styled;
const Input = require('@material-ui/core/Input').default;
const Button = require('@material-ui/core/Button').default;
const SearchIcon = require('@material-ui/icons/Search').default;

const HeaderWrapper = styled.nav`
    font-size: 1.2em;
    padding: 20px;
`;

class Header extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('submit');
    }

    render() {
        return (
            <header className="header">
                <span className="header__logo">Omail</span>
                <form className="header__search-form" onSubmit={this.onSubmit}>
                    <Input fullWidth className="header__search-field" />
                    <Button type="submit" variant="contained" color="primary">
                        <SearchIcon />
                    </Button>
                </form>
            </header>
        );
    }
}
module.exports = () => {
    return <HeaderWrapper>This is the header</HeaderWrapper>;
};
