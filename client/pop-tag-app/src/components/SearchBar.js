import React from 'react';
import './../css/SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {searchValue: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setStart({value: event.target.value});
    }

    handleSubmit(event) {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                value={this.state.value}
                placeholder="Try #Christmas"
                onChange={this.handleChange} />
            </form>
        );
    }
}

export default SearchBar;
