import React, {useState, useEffect} from 'react';
import Header from './components/ui/Header.component.jsx';
import './App.css';

const App = () => {
  // 1st index: going to represent the data
  // 1nd index: changing/manipualting the state
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
