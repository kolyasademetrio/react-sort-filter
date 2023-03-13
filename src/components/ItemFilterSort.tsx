import { ChangeEvent, Dispatch } from 'react';
import { SortByType, CategoriesType, CATEGORY, SORTBY } from '../App';

type ItemFilterSortProps = {
   setFilterByCategory: Dispatch<CategoriesType>;
   setSortBy: Dispatch<SortByType>;
   sortBy: SortByType
};

export default function ItemFilterSort({ setFilterByCategory, setSortBy, sortBy }: ItemFilterSortProps) {
   const setCategoryhandler = (e: ChangeEvent<HTMLSelectElement>) => {
      setFilterByCategory(e.target.value as CategoriesType);
   };

   return (
      <div>
         <label>
            <input type="radio" value={SORTBY.AZ} name="sort" checked={sortBy === SORTBY.AZ} onChange={e => setSortBy(e.target.value as SortByType)}/>
            A-Z
         </label>
         <label>
            <input type="radio" value={SORTBY.PRICE} name="sort" checked={sortBy === SORTBY.PRICE} onChange={e => setSortBy(e.target.value as SortByType)}/>
            Price
         </label>
         <br/>
         <label>Filter by Category</label>
         <select onChange={setCategoryhandler}>
            <option value={CATEGORY.ALL}>All</option>
            <option value={CATEGORY.RUM}>Rum</option>
            <option value={CATEGORY.TEQUILA}>Tequila</option>
            <option value={CATEGORY.GIN}>Gin</option>
            <option value={CATEGORY.WHISKEY}>Whiskey</option>
            <option value={CATEGORY.VODKA}>Vodka</option>
         </select>
      </div>
   )
};
