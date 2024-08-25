import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import PropTypes from 'prop-types';
import './InfoBox.css';

function InfoBox({ city, temp, humidity, tempMin, tempMax, weather, feelslike }) {

    const INIT_URL = "https://images.unsplash.com/photo-1628525805814-cf9fe2582727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL = "https://media.istockphoto.com/id/1322096928/photo/hot-summer-sunlight-rays-pouring-through-human-hand-hand-covering-sun-light-heat-temperature.webp?b=1&s=170667a&w=0&k=20&c=HXuSwwH0R9j2czqyg6Wesr1sqUzZhZNOIENK5t4bxvA=";
    const COLD_URL = "https://images.unsplash.com/photo-1521902276589-86dc36705998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    
    const imageUrl = humidity > 80 ? RAINY_URL : temp > 15 ? HOT_URL : COLD_URL;

    return (
        <div className="infoBox">
            <div className="cardcontainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageUrl}
                        title="Weather image"
                    />
                    <CardContent className="CardContent">
                        <Typography gutterBottom variant="h5" component="div">
                            {city || 'Unknown City'}
                            
                            {humidity > 80 ? <ThunderstormIcon /> :
                             temp > 15 ? <WbSunnyIcon /> : 
                             <SevereColdIcon />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div>Temperature ={temp !== undefined ? `${temp}°C` : 'N/A'}</div>
                            <div>Humidity = {humidity !== undefined ? humidity : 'N/A'}</div>
                            <p>Min Temp = {tempMin !== undefined ? `${tempMin}°C` : 'N/A'}</p>
                            <p>Max Temp = {tempMax !== undefined ? `${tempMax}°C` : 'N/A'}</p>
                            <p>The weather can be described as <i>{weather || 'N/A'}</i> and feels like {feelslike !== undefined ? `${feelslike}°C` : 'N/A'}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>      
        </div>
    );
}


InfoBox.propTypes = {
    city: PropTypes.string,
    temp: PropTypes.number,
    humidity: PropTypes.number,
    tempMin: PropTypes.number,
    tempMax: PropTypes.number,
    weather: PropTypes.string,
    feelslike: PropTypes.number
};

export default InfoBox;
