import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchPage extends Component {
    // const [searchText, setSearchText] = useState('');

    state = {
        searchText: ''
    }

    searchForGame = () => {
        console.log('clicked on the old button');
        this.props.dispatch({
            type: 'SEARCH_FOR_GAME',
            payload: this.state.searchText
        })
        this.setState({
            ...this.state,
            searchText: ''
        })
    }

    setSearchText = (event) => {
        this.setState({
            ...this.state,
            searchText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Search</h1>
                <input onChange={this.setSearchText} />
                <button onClick={this.searchForGame}>Search!</button>
                {JSON.stringify(this.state.searchText)}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        searchResults: reduxStore
    }
}

export default connect(mapStateToProps)(SearchPage);