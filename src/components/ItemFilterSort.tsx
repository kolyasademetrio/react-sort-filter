import React from 'react'

export default function ItemFilterSort({ setSortBy, setFilterByCategory }) {
   const setCategoryhandler = e => {
      setFilterByCategory(e.target.value);
   };

   return (
      <div>
         <label>
            <input type="radio" value="a-z" name="sort" checked={null} onChange={e => setSortBy(e.target.value)}/>
            A-Z
         </label>
         <label>
            <input type="radio" value="price" name="sort" checked={null} onChange={e => setSortBy(e.target.value)}/>
            Price
         </label>
         <br/>
         <label>Filter by Category</label>
         <select onChange={setCategoryhandler}>
            <option value="all">All</option>
            <option value="rum">Rum</option>
            <option value="tequila">Tequila</option>
            <option value="gin">Gin</option>
            <option value="whiskey">Whiskey</option>
            <option value="vodka">Vodka</option>
         </select>
      </div>
   )
};
