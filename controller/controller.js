const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()



const URL = process.env.CURRENT_WEATHER_URL
const KEY = process.env.API_KEY



const weather= async(req,res)=>{
  const city = req.query.city
  const fetch_url = `${URL}?access_key=${KEY}&query=${city}`
  try{
    const api_response = await axios.get(fetch_url)
    const data = api_response.data

    const weather_info = {
      city_name : data.location.name,
      country_name : data.location.country,
      region: data.location.region,
      local_time: data.location.localtime,
      temperature: data.current.temperature,
      description : data.current.weather_descriptions[0],
      wind_speed : data.current.wind_speed,
      cloud_cover : data.current.cloudcover,
      humidity: data.current.humidity,
    }

    res.json(weather_info)

  }catch(error){
    res.send({error: error.message})
  }
}



module.exports = {
  weather
}