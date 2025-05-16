import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1720639128406-5197cb67169a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c2t5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1467489748806-96d0b3ae69ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const RAIN_URL =
    "https://media.istockphoto.com/id/2183276741/photo/dark-overcast-sky-with-heavy-rain-and-lightning-intense-weather-phenomenon.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hzdnwem_ill_Xemxi-BWChq0pTotJ_Ahn-N_F-28bls=";

  return (
    <div className="InfoBox">
      <h3>Weather Details - {info.feelsLike}</h3>

      <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="Weather image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <br />
              Humidity: {info.humidity}%<br />
              Max Temp: {info.tempMax}°C <br />
              Min Temp: {info.tempMin}°C <br />
              Described As : {info.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
