import React from 'react';
import Card from './Card';
import styles from '../styles/Cards.module.css';

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  if (cities) {
    return (
      <>
        <div className={styles.container}>
        {
          cities.map( (citi, index) => (
            <div 
              key={index}
              className="cities"
            >
              <Card
                temp={citi.temp}
                name={citi.name}
                min={citi.min}
                max={citi.max}
                img={citi.img}
                description={citi.description}
                onClose={() => onClose(citi.id)}
              />
            </div>))
        }
        </div>
      </>
    );
  } else {
    return (
    <div></div>
    )
  }
  
};
