import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header.component.jsx';
import CharacterGrid from './components/characters/CharacterGrid.component.jsx';
import Search from './components/ui/Search.component';
import './App.css';

const App = () => {
  // 1st index: going to represent the data
  // 1nd index: changing/manipualting the state
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  // To make request
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      setItems(result.data)
      setIsLoading(false);
    }

    fetchItems();
  }, [query]); // 2nd param: needs to have dependencies when we use filter query

  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
