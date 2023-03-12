import React, { useRef } from 'react'

const ItemSearch = ({setInput}) => {
   const inputRef = useRef();

   const handleChange = e => {
      console.log('e.target.value', e.target.value)
      setInput(e.target.value);
   };

   const handleSubmit = e => {
      console.log('inputRef.current.value', inputRef.current.value)
      e.preventDefault();
      setInput(inputRef.current.value);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="input"
               placeholder="Search by name"
               onChange={handleChange}
               ref={inputRef}
            />
         </form>
      </div>
   );
}

export default ItemSearch;
