import React from 'react'
import SearchResults from './SearchResults'

function Search() {
  return (
      <div style={{ margin: '15px' }}>
          <input type="text" placeholder="Search" />
          <SearchResults/>
    </div>
  )
}

export default Search