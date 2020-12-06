import React from 'react';
import styles from '../styles/Card.module.css';

export default function Card(props) {
  return (
    <> 
      <div className={styles.card}>
        <div className={styles.top}>
          <button onClick={props.onClose}>
            X
          </button></div>
        <h1>{props.name}</h1>
        <div className={styles.info}>
          <div className={styles.outerbox}>
            <div className={styles.databox}>
              <div className={styles.mainbox}>
                <h3>{`${props.temp} ° C`}</h3>
              </div>
              <div className={styles.box}>
                <p>Min</p>
                <p>{`${props.min} ° C`}</p>
              </div> 
              <div className={styles.box}>
                <p>Max</p>
                <p>{`${props.max} ° C`}</p>
              </div>
            </div>
            <div className={styles.imgcontainer}>
              <div className={styles.img}><img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" /></div>
              <p>{props.description[0].toUpperCase() + props.description.slice(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
