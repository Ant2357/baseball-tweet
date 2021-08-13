import * as WeatherJson from '@/@types/WeatherJson';
import { reactive, onMounted } from 'vue';

type WeatherState = {
  tokyo: WeatherJson.RootObject | unknown
}

interface UseWeather {
  weatherState: WeatherState;
}

export const useWeather = (): UseWeather => {
  const weatherState = reactive<WeatherState>({
    tokyo: {
      "forecasts": [
        {}
      ]
    },
  });

  onMounted(() => {
    //『天気予報 API(livedoor 天気互換)』を使用
    fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
      .then(res => res.json())
      .then(data => weatherState.tokyo = data);
  });

  return {
    weatherState
  };
};