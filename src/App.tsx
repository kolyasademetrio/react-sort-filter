import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import ItemCollection from './containers/ItemCollection'
import ItemSearch from './components/ItemSearch'
import ItemFilterSort from './components/ItemFilterSort'

const items = [
   {
     "id":1,
     "name":"Appleton's",
     "category": "Rum",
     "price": 24.40
   },
   {
     "id":2,
     "name":"Boodle's",
     "category": "Gin",
     "price": 20.10
   },
   {
     "id":3,
     "name":"Jack Daniel's",
     "category": "Whiskey",
     "price": 26
   },
   {
     "id":4,
     "name":"E.H. Taylor",
     "category": "Whiskey",
     "price": 41.82
   },
   {
     "id":5,
     "name":"Hendrick's",
     "category": "Gin",
     "price": 34.50
   },
   {
     "id":6,
     "name":"Grey Goose",
     "category": "Vodka",
     "price": 37.80
   },
   {
     "id":7,
     "name":"Ketel One",
     "category": "Vodka",
     "price": 32.50
   },
   {
     "id":8,
     "name":"Forteleza Blanco",
     "category": "Tequila",
     "price": 46.30
   },
   {
     "id":9,
     "name":"Espolon Reposado",
     "category": "Tequila",
     "price": 22.67
   },
   {
     "id":10,
     "name":"Plantation Pineapple",
     "category": "Rum",
     "price": 31.99
   }
];

const App = () => {

   const [allItems, setAllItems] = useState([]);
   const [input, setInput] = useState('');
   const [filterByCategory, setFilterByCategory] = useState('all');
   const [sortBy, setSortBy] = useState('a-z');

   useEffect(() => {
      setAllItems(items);
   }, []);

   const filterBySearchHandler = (data, input) => {
      return data.filter(item => {
         return item.name.toLowerCase().includes(input.toLowerCase());
      })
   };

   const filterByCategoryHandler = (data, filter) => {
      if (filter.toLowerCase() !== 'all') {
         return data.filter( item => item.category.toLowerCase() === filter.toLowerCase());
      } else {
         return data;
      }
   };

   const sortByHandler = (data, filter) => {
      if (filter.toLowerCase() !== 'a-z') {
         return data.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      } else if (filter.toLowerCase() !== 'price') {
         return data.sort((a,b) => a.price - b.price);
      }
   };

   const sortedAndFilteredData = useMemo(() => {
      const filteredBySearchData = filterBySearchHandler(allItems, input);
      const filteredByCategoryData = filterByCategoryHandler(filteredBySearchData, filterByCategory);
      const result = sortByHandler(filteredByCategoryData, sortBy);

      return result;
   }, [allItems, input, filterByCategory, sortBy]);

   return (
      <div className="app">
         <ItemSearch setInput={setInput}/>
         <ItemFilterSort setFilterByCategory={setFilterByCategory} setSortBy={setSortBy}/>
         <ItemCollection allItems={sortedAndFilteredData}/>
      </div>
   );
};

export default App;