import { useMemo, ChangeEvent, Dispatch } from 'react';

type ItemCountProps = {
   itemsTotalCount: number,
   limit: number,
   setLimit: Dispatch<number>,
   setCurrentPage: Dispatch<number>
};

const CountFilter = ({itemsTotalCount, limit, setLimit, setCurrentPage}: ItemCountProps) => {
   const setItemCountHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      setLimit(+e.target.value as number);
      setCurrentPage(1);
   };

   let pageNumbersArr: string[] = useMemo(() => {
      return Array.from(Array(itemsTotalCount))
   }, [itemsTotalCount]);

   return (
      <>
         <label>Count items on page: </label>
         <select value={limit} onChange={setItemCountHandler}>
            {[...pageNumbersArr].map((_, index) => {
               const value = index + 1;
               return (
                  <option 
                     key={new Date().toISOString() + index}
                     value={value}
                  >
                     {value}
                  </option>
               );
            })}
         </select>
      </>
   );
};

export default CountFilter;