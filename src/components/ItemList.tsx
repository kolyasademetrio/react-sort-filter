import ItemSingle from './ItemSingle';
import { ItemType } from '../types/items';

const ItemList = ({allItems, paginationHandler}: {allItems: ItemType[], paginationHandler: () => void}) => {
   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Cost</th>
                  <th>Category</th>
               </tr>
            </thead>
            <tbody>
               {allItems && allItems.map(({id, price, name, category}) => (
                  <ItemSingle key={id} id={id} name={name} category={category} price={price}  />
               ))}
            </tbody>
        </table>
        <div>
            <button type="button" onClick={paginationHandler}>More</button>
        </div>
    </div>
   );
};

export default ItemList;
