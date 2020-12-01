import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <>
      <div>Cards Component</div>
      {
        props.cities.map( citi => (
          <div 
            key={citi.id}
            className="cities"
          >
            <Card 
              name={citi.name}
              min={citi.main.temp_min}
              max={citi.main.temp_max}
              img={citi.weather[0].icon}
              onClose={() => alert(citi.name)}
            />
          </div>))
      }
  
    </>
  )
};
