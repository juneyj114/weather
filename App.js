import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "1888e2862cb42ccf57b6cc167bc4f7c1";

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data :{main : {temp}, weather} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({isLoading: false, condition: weather[0].main, temp});
  }

  getLocation = async () => {
    await Location.requestPermissionsAsync();
    const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
    this.getWeather(latitude, longitude);
    
  }
  
  componentDidMount(){
    this.getLocation()
  }
  
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
