import { useState, useEffect, useMemo } from 'react';
import './App.css';
import ItemCollection from './containers/ItemCollection'
import ItemSearch from './components/ItemSearch'
import ItemFilterSort from './components/ItemFilterSort'
import items from './store';

export interface ItemType {
   id: number;
   name: string;
   category: string;
   price: number;
};
export const CATEGORY = {
   ALL: 'all',
   RUM: 'rum',
   TEQUILA: 'tequila',
   GIN: 'gin',
   WHISKEY: 'whiskey',
   VODKA: 'vodka',
};

export const SORTBY = {
   AZ: 'a-z',
   PRICE: 'price',
};

export type CategoriesType =
   typeof CATEGORY.ALL |
   typeof CATEGORY.RUM |
   typeof CATEGORY.TEQUILA |
   typeof CATEGORY.GIN |
   typeof CATEGORY.WHISKEY |
   typeof CATEGORY.VODKA;

export type SortByType = typeof SORTBY.AZ | typeof SORTBY.PRICE;

const App = () => {
   const [allItems, setAllItems] = useState<ItemType[]>([]);
   const [input, setInput] = useState<string>('');
   const [filterByCategory, setFilterByCategory] = useState<CategoriesType>('all');
   const [sortBy, setSortBy] = useState<SortByType>('a-z');

   useEffect(() => {
      setAllItems(items);
   }, []);

   const filterBySearchHandler = (
      data: ItemType[],
      input: string
   ) => {
      return data.filter(item => {
         return item.name.toLowerCase().includes(input.toLowerCase());
      })
   };

   const filterByCategoryHandler = (
      data: ItemType[],
      filter: CategoriesType
   ) => {
      if (filter.toLowerCase() !== 'all') {
         return data.filter( item => item.category.toLowerCase() === filter.toLowerCase());
      } else {
         return data;
      }
   };

   const sortByHandler = (
      data: ItemType[],
      filter: SortByType
   ) => {
      if (filter.toLowerCase() !== 'a-z') {
         return data.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      } else if (filter.toLowerCase() !== 'price') {
         return data.sort((a,b) => a.price - b.price);
      }
   };

   const sortedAndFilteredData: ItemType[] | undefined = useMemo(() => {
      const filteredBySearchData = filterBySearchHandler(allItems, input);
      const filteredByCategoryData = filterByCategoryHandler(filteredBySearchData, filterByCategory);
      const result = sortByHandler(filteredByCategoryData, sortBy);

      return result;
   }, [allItems, input, filterByCategory, sortBy]);

   return (
      <div className="app">
         <ItemSearch setInput={setInput}/>
         <ItemFilterSort setFilterByCategory={setFilterByCategory} setSortBy={setSortBy} sortBy={sortBy} />
         {sortedAndFilteredData && <ItemCollection allItems={sortedAndFilteredData}/>}
      </div>
   );
};

export default App;