import { ChangeEvent, Dispatch } from 'react';
import { SortByType, SORTBY } from '../../types/items';

type SortByFilterProps = {
   setSortBy: Dispatch<SortByType>;
   sortBy: SortByType
};

const SortByFilter = ({ setSortBy, sortBy }: SortByFilterProps) => {
   const sortByHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setSortBy(e.target.value as SortByType);
   };

   return (
      <div>
         <label>
            <input type="radio" value={SORTBY.AZ} name="sort" checked={sortBy === SORTBY.AZ} onChange={sortByHandler}/>
            A-Z
         </label>
         <label>
            <input type="radio" value={SORTBY.PRICE} name="sort" checked={sortBy === SORTBY.PRICE} onChange={sortByHandler}/>
            Price
         </label>
      </div>
   )
};

export default SortByFilter;