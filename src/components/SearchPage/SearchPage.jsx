import React, { useState } from 'react';
// import { connect } from 'react-redux';


function SearchPage() {
    const [searchText, setSearchText] = useState('');

    function searchForGame() {
        console.log('clicked on the old button');
        this.props.dispatch({
            type: 'SEARCH_FOR_GAME',
            payload: searchText
        })
        setSearchText('');
    }

    return (
        <div>
            <h1>Search</h1>
            <input onChange={(event) => setSearchText(event.target.value)}/>
            <button onClick={searchForGame}>Search!</button>
            {JSON.stringify(searchText)}
        </div>
    )
    
}

export default SearchPage;