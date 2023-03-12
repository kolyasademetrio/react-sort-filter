import React from 'react'

const ItemCollection = ({allItems}) => {
   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Cost</th>
                  <th>Category</th>
               </tr>
            </thead>
            <tbody>
               {allItems && allItems.map(({id, price, name, category}) => (
                  <tr key={id}>
                     <td>{name}</td>
                     <td>${parseFloat(price).toFixed(2)}</td>
                     <td>{category}</td>
                  </tr>
               ))}
            </tbody>
        </table>
    </div>
   );
};

export default ItemCollection;
