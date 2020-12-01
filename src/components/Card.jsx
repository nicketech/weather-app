import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <> 
      <div>Card Component</div>
      <div className="card">
        <div className="top">
          <button onClick={props.onClose}>
            X
          </button></div>
        <h1>{props.name}</h1>
        <div className="info">
          <div className="minmax">
            <div className="">
              <p>Min:</p>
              <p>{props.min}</p>
            </div> 
            <div className="">
              <p>Max</p>
              <p>{props.max}</p>
            </div>
          </div>
          <div className="sun"><img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" /></div>
        </div>
      </div>
    </>
  
  )
};
