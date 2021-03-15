import React, { useEffect, useState } from 'react';
import './App.scss';
import Search from './components/Search/Search';

export default function App() {

  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=b622f1b5c43b4c479d7194331210903&q=${city}&days=3`)
      .then(response => response.json())
      .then((data) => {
        setWeatherInfo(data)
      })

  }, [city])

  function handlerOnChange(event) {
    setSearch(event.target.value)
  }

  function handlerOnKeyDown(event) {
    return event.keyCode === 13 && search.length > 1 ? setCity(search) : null;
  }

  function handlerOnBlur() {
    setCity(search)
  }

  return (
    <>
      <Search
        onChange={(event) => handlerOnChange(event)}
        onKeyDown={(event) => handlerOnKeyDown(event)}
        onBlur={(event) => handlerOnBlur(event)}
      />
      {weatherInfo.current && weatherInfo.forecast.forecastday.map((item) => {
        return (
          <>
            <div className="weatherdiv">
              <div>{item.date}</div>
              <img src={`${item.day.condition.icon}`} alt="icon"></img>
              <div>{item.day.condition.text}</div>
              <div>{`${item.day.maxtemp_c}° / ${item.day.maxtemp_c}°`}</div>
            </div>
          </>
        )
      })}
    </>

  )
}


// http://api.weatherapi.com/v1/forecast.json?key=b622f1b5c43b4c479d7194331210903&q=${city}&days=${forecastDay}

// b622f1b5c43b4c479d7194331210903

// `http://api.weatherapi.com/v1/current.json?key=b622f1b5c43b4c479d7194331210903&q=${city}`

