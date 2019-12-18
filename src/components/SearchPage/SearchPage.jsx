import React, { useState } from 'react';


function SearchPage() {
    const [searchText, setSearchText] = useState('');
    return (
        <div>
            <h1>Search</h1>
            <input onChange={(event) => setSearchText(event.target.value)}/>
            <button>Search!</button>
            {JSON.stringify(searchText)}
        </div>
    )
    
}

export default SearchPage;