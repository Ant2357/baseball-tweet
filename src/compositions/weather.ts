import * as WeatherJson from '@/@types/WeatherJson';
import { reactive, onMounted } from 'vue';

type WeatherState = {
  tokyo: WeatherJson.RootObject | unknown;
  osaka: WeatherJson.RootObject | unknown;
}

interface UseWeather {
  weatherState: WeatherState;
}

export const useWeather = (): UseWeather => {
  const weatherState = reactive<WeatherState>({
    tokyo: {
      "forecasts": [
        {
          "image": {
            "url": ""
          }
        }
      ]
    },
    osaka: {
      "forecasts": [
        {
          "image": {
            "url": ""
          }
        }
      ]
    }
  });

  onMounted(() => {
    //『天気予報 API(livedoor 天気互換)』を使用
    // 東京の天気
    fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
      .then(res => res.json())
      .then(data => weatherState.tokyo = data);

    // 大阪の天気
    fetch('https://weather.tsukumijima.net/api/forecast/city/270000')
      .then(res => res.json())
      .then(data => weatherState.osaka = data);

  });

  return {
    weatherState
  };
};