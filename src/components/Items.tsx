import { useState, useEffect, useMemo } from 'react';
import ItemList from './ItemList';
import SearchFilter from './filters/SearchFilter';
import SortByFilter from './filters/SortByFilter';
import CategoryFilter from './filters/CategoryFilter';
import CountFilter  from './filters/CountFilter';

import { ItemType, CategoriesType, SortByType } from '../types/items';

const Items = () => {
   const [allItems, setAllItems] = useState<ItemType[]>([]);
   const [input, setInput] = useState<string>('');
   const [filterByCategory, setFilterByCategory] = useState<CategoriesType>('all');
   const [sortBy, setSortBy] = useState<SortByType>('a-z');

   const [currentPage, setCurrentPage] = useState<number>(1);
   const [limit, setLimit] = useState<number>(4);
   const [countPages, setCountPages] = useState<number>(0);
   const [itemsTotalCount, setItemsTotalCount] = useState<number>(0);

   const paginationHandler = () => {
      currentPage < countPages && setCurrentPage(prev => prev + 1);
   };

   const getData = async () => {
      console.log('Request is done')
      try {
         const url = `http://localhost:4000/items?_page=${currentPage}&_limit=${limit}`;
         const response = await fetch(url);
         const itemsTotalCount = +response.headers.get('x-total-count')!;
         const countPages = itemsTotalCount / limit;
         setItemsTotalCount(itemsTotalCount);
         setCountPages(countPages);
         const result = response.json();
         return result;
      } catch (error) {
         console.error(error);
         throw error;
      }
   }

   useEffect(() => {
      getData().then(items => {
         setAllItems(items);
      });
   }, [currentPage, limit]);

   const filterBySearchHandler = (
      data: ItemType[],
      input: string
   ) => {
      return data.filter(item => {
         return item?.name?.toLowerCase().includes(input.toLowerCase());
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
      if (filter.toLowerCase() === 'a-z') {
         return [...data].sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      } else if (filter.toLowerCase() === 'price') {
         return [...data].sort((a,b) => a.price - b.price);
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
         {/* {`itemsTotalCount: ${itemsTotalCount}`}<br/>
         {`currentPage: ${currentPage}`}<br/>
         {`limit: ${limit}`}<br/>
         {`countPages: ${countPages}`}<br/>
         {`allItems.length: ${allItems.length}`} */}
         <div className="filter-item">
            <SearchFilter setInput={setInput}/>
         </div>
         <div className="filter-item">
            <SortByFilter setSortBy={setSortBy} sortBy={sortBy} />
         </div>
         <div className="filter-item">
            <CategoryFilter setFilterByCategory={setFilterByCategory} />
         </div>
         <div className="filter-item">
            <CountFilter itemsTotalCount={itemsTotalCount} setCurrentPage={setCurrentPage} setLimit={setLimit} limit={limit} />
         </div>
         {sortedAndFilteredData &&
            <ItemList allItems={sortedAndFilteredData} paginationHandler={paginationHandler} />
         }
      </div>
   );
};

export default Items;