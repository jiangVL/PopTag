import React from 'react';
import FontAwesome from 'react-fontawesome';
import './../css/SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {searchValue: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('You searched: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="searchSubmission" onSubmit={this.handleSubmit}>
                <FontAwesome tag="span" className="searchIcon" name="search" size="2x"/>
                <input type="text"
                value={this.state.value}
                placeholder="Try &quot;#Christmas&quot;"
                onChange={this.handleChange}/>
            </form>
        );
    }
}

export default SearchBar;
