import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        // Fetch weather data from an API
        const fetchWeatherData = async () => {
            try {
                const response = await fetch('https://api.example.com/weather'); // Replace with your weather API endpoint
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.log('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div>
            {weatherData ? (
                <div>
                    <h2>Current Weather</h2>
                    <p>Temperature: {weatherData.temperature}</p>
                    <p>Condition: {weatherData.condition}</p>
                    <p>Wind Speed: {weatherData.windSpeed}</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default WeatherWidget;
