import { ChangeEvent, Dispatch } from 'react';
import { CategoriesType, CATEGORY } from '../../types/items';

type CategoryFilterProps = {
   setFilterByCategory: Dispatch<CategoriesType>;
};

const CategoryFilter = ({ setFilterByCategory }: CategoryFilterProps) => {
   const setCategoryhandler = (e: ChangeEvent<HTMLSelectElement>) => {
      setFilterByCategory(e.target.value as CategoriesType);
   };

   return (
      <div>
         <label>Filter by Category: </label>
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

export default CategoryFilter;