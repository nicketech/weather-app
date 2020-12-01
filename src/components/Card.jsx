import React from 'react';
import styles from '../styles/Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <> 
      <div className={styles.card}>
        <div className={styles.top}>
          <button onClick={props.onClose}>
            X
          </button></div>
        <h2>{props.name}</h2>
        <div className={styles.info}>
          <div className={styles.outerbox}>
            <div className={styles.box}>
              <p>Min:</p>
              <p>{props.min}</p>
            </div> 
            <div className={styles.box}>
              <p>Max</p>
              <p>{props.max}</p>
            </div>
            <div className={styles.img}><img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
};
