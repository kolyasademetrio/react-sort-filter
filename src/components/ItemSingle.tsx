import { ItemType } from '../types/items';
const ItemSingle = ({ id, name, category, price }: ItemType) => {
   return (
      <tr key={id}>
         <td>{id}</td>
         <td>{name}</td>
         <td>${price.toFixed(2)}</td>
         <td>{category}</td>
      </tr>
   );
};

export default ItemSingle;