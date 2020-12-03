import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

export default function App() {
  
  const [cities, setCities] = useState([]);
  
  const onSearch = (name) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=a24e09744b6cde0a072231eca7cf9c20`)
   .then(r => r.json())
   .then(resolve => {
    if (resolve.main !== undefined) {
      const city = {
        min: Math.round(resolve.main.temp_min),
        max: Math.round(resolve.main.temp_max),
        img: resolve.weather[0].icon,
        id: resolve.id,
        wind: resolve.wind.speed,
        temp: resolve.main.temp,
        name: resolve.name,
        weather: resolve.weather[0].main,
        clouds: resolve.clouds.all,
        latitud: resolve.coord.lat,
        longitud: resolve.coord.lon
      };
      const exist = cities.filter(c => c.id === city.id);
      if (exist.length > 0) {
        alert('City already in cards')
      } else {
        setCities(cities => [...cities, city])
      }
    } else {
    alert('City not found!');
    }
   })
   .catch(err => alert(err));
  }

  const onClose = (id) => {
    setCities(cities => cities.filter(city => city.id !== id))
  }
  
  return (
    <div className="App">
      <Nav 
        onSearch={onSearch}
      />
      <Cards
        cities={cities}
        onClose={onClose}
      />

      </div>
  );
}

