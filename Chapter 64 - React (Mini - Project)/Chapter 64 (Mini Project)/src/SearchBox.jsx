import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "8951ca5295fdb533c39ccafd12838c9a";

  let getWeatherInfo = async () => {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
      alert("City not found. Please enter a valid city name.");
      return location.reload();
    }

    let jsonRes = await res.json();
    let result = {
      city: jsonRes.name, // ADD THIS
      temp: jsonRes.main.temp,
      tempMin: jsonRes.main.temp_min,
      tempMax: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      feelsLike: jsonRes.main.feels_like,
      description: jsonRes.weather[0].description,
    };

    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let info = await getWeatherInfo();
    updateInfo(info);
  };

  return (
    <div className="SearchBox">
      <h3>Search</h3>

      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br />
        <br />

        <Button type="submit" variant="contained">
          Get Weather
        </Button>
      </form>
    </div>
  );
}
