import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchPage extends Component {
    // const [searchText, setSearchText] = useState('');

    state = {
        searchText: ''
    }

    searchForGame = (event) => {
        // makes page not reload on submit
        event.preventDefault();
        console.log('clicked on the old button. or hit enter, now that we added form..');
        this.props.dispatch({
            type: 'SEARCH_FOR_GAME',
            payload: {searchText: this.state.searchText}
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

        let searchResultsList = this.props.searchResults.map((game, index) => {
            return (
                <article className="card">
                    <img src={game.image.small_url} alt={game.name} />
                    <div className="card-content">
                        <h2>{game.name}</h2>
                        <p>{game.deck}</p>
                        <h2>Platforms:</h2>
                        {game.platforms.map((system) => {
                            return (
                                <h3>{system.name}</h3>
                            )
                        })}
                        <button>Add to Checkout!</button>
                    </div>
                </article>
            )
        })

        return (
            <>
            <div className="top-part-of-search">
                <h1>Search</h1>
                <form>
                    <input onChange={this.setSearchText} className="search-input" />
                    <button onClick={this.searchForGame} className="search-button">Search!</button>
                </form>
                {/* {JSON.stringify(this.state.searchText)} */}
            </div>
            <div>
                <section className="cards">
                        {this.props.searchResults &&
                            searchResultsList}
                </section>
                {JSON.stringify(this.props.searchResults)}
            </div>
            </>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        searchResults: reduxStore.searchResults.searchReducer,
    }
}

export default connect(mapStateToProps)(SearchPage);