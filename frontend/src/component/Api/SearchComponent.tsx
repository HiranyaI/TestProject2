import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface SearchResult {
  id: number;
  name: string;
}

function SearchComponent() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    axios.get<SearchResult[]>('https://localhost:7260/api/search')
      .then(response => {
        setSearchResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
