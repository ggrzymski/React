import React,{ Component } from 'react';

// ES6 Class : actual object with properties and methods
// State is a plain JavaScript object that exists on a class-based component
// Each instance of a component has a state.

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: ''}; 
    }

    //every class must have render function and return JSX
    render() {
        return (
            <div className="search-bar">
                <input 
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
