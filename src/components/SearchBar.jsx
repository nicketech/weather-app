import React, {useState} from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  const [input, setInput] = useState('');


  const onChangeValue = (e) => {
    setInput(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.onSearch(input);
  }

  return (
    <>
      <form className={styles.form}>
        <input
          className={styles.input}
          value={input}
          onChange={onChangeValue}
        />
        <button
          className={styles.button}
          onClick={handleClick}
        >
          Search
        </button>
      </form>  
    </>
  )
};
