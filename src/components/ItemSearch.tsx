import { ChangeEvent, FormEvent, useRef, Dispatch } from 'react';

const ItemSearch = ({setInput}: {setInput: Dispatch<string>}) => {
   const inputRef = useRef<HTMLInputElement>(null);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setInput(inputRef?.current?.value as string);
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
