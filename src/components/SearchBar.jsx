import React, {useState} from 'react';

export default function SearchBar(props) {
  // acá va tu código
  const [input, setInput] = useState();


  const onChangeValue = (e) => {
    setInput(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.onSearch(input);
  }

  return (
    <>
      <div>Search Bar Component</div>
      <form>
        <input 
          value={input}
          onChange={onChangeValue}
        />
        <button
          onClick={handleClick}
        >
          Search
        </button>
      </form>  
    </>
  )
};
