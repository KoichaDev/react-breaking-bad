import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header.component.jsx';
import CharacterGrid from './components/characters/CharacterGrid.component.jsx';
import './App.css';

const App = () => {
  // 1st index: going to represent the data
  // 1nd index: changing/manipualting the state
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // To make request
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?`);

      console.log(result.data);
      setItems(result.data)
      setIsLoading(false);
    }

    fetchItems();
  }, []); // 2nd param: needs to have dependencies when we use filter query

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
