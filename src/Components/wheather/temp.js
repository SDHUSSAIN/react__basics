import React, {useState,useEffect}from 'react'
import'./style.css'

const Temp = () => {

    const [weatherData,setweatherData] = useState("delhi");
    const[plusData,setPlusData] = useState({});

    const getWeatherInfo= async()=>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData}&units=metric&appid=39998c1660eb41fe56a2988fb94d9acf`;
            let res = await fetch(url);
            let data = await res.json();
            const{temp,humidity,pressure} = data.main;
            const{main:weathermood} = data.weather[0];
            const{name} = data; 
            const{speed} = data.wind;
            const{country,sunset} = data.sys;
            
            const newWeatherData = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
                
            };
            setPlusData(newWeatherData);

        }catch(error){
            console.log(error);

        }
    };

    useEffect(()=>{
        getWeatherInfo();

    },[])

    return (
        <>
        <div className="wrap">
            <div className="search">
                <input type="search" placeholder="search..." autofocus id="search" className="searchTerm" value={weatherData} onChange={(e)=>setweatherData(e.target.value)}/>
                <button className="searchButton" type="button" onClick={()=>getWeatherInfo()}>Search</button>
            </div>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={"wi wi-day-sunny"}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{plusData.temp}&deg;</span>

                    </div>
                    <div className="description">
                        <div className="weatherCondition">{plusData.name}</div>
                        <div className="place">{plusData.country} </div>
                    </div>
                   
                </div>
                <div className="date">
                    {new Date().toLocaleString()}
                </div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">
                                {plusData.weathermood}<br/>
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">
                                {plusData.humidity}<br/>
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                         <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className="extra-info-leftside">
                                {plusData.pressure}<br/>
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className="extra-info-leftside">
                                {plusData.speed}<br/>
                                Speed
                            </p>
                        </div>

                    </div>
                </div>
            </article>

        </div>
            
        </>
    )
}

export default Temp;
