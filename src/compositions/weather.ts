import * as WeatherJson from '@/@types/WeatherJson';
import { reactive, onMounted } from 'vue';

export type WeatherState = {
  tokyo: WeatherJson.RootObject;
  yokohama: WeatherJson.RootObject;
  chiba: WeatherJson.RootObject;
  saitama: WeatherJson.RootObject;
  nagoya: WeatherJson.RootObject;
  osaka: WeatherJson.RootObject;
  hiroshima: WeatherJson.RootObject;
  fukuoka: WeatherJson.RootObject;
  miyagi: WeatherJson.RootObject;
  hokkaido: WeatherJson.RootObject;
}

export interface UseWeather {
  weatherState: WeatherState;
}

export const useWeather = (): UseWeather => {
  const weatherState = reactive<WeatherState>({
    tokyo: {} as WeatherJson.RootObject,
    yokohama: {} as WeatherJson.RootObject,
    chiba: {} as WeatherJson.RootObject,
    saitama: {} as WeatherJson.RootObject,
    nagoya: {} as WeatherJson.RootObject,
    osaka: {} as WeatherJson.RootObject,
    hiroshima: {} as WeatherJson.RootObject,
    fukuoka: {} as WeatherJson.RootObject,
    miyagi: {} as WeatherJson.RootObject,
    hokkaido: {} as WeatherJson.RootObject
  });

  onMounted(() => {
    //『天気予報 API(livedoor 天気互換)』を使用
    // 東京の天気 ヤクルト 巨人
    fetch('https://weather.tsukumijima.net/api/forecast/city/130010')
      .then(res => res.json())
      .then(data => weatherState.tokyo = data);

    // 神奈川の天気 横浜
    fetch('https://weather.tsukumijima.net/api/forecast/city/140010')
      .then(res => res.json())
      .then(data => weatherState.yokohama = data);

    // 千葉の天気 ロッテ
    fetch('https://weather.tsukumijima.net/api/forecast/city/120010')
      .then(res => res.json())
      .then(data => weatherState.chiba = data);

    // 埼玉 西武
    fetch('https://weather.tsukumijima.net/api/forecast/city/110010')
      .then(res => res.json())
      .then(data => weatherState.saitama = data);

    // 名古屋の天気 中日
    fetch('https://weather.tsukumijima.net/api/forecast/city/230010')
      .then(res => res.json())
      .then(data => weatherState.nagoya = data);

    // 大阪の天気 阪神(正しくは兵庫だけど、実質大阪) オリックス
    fetch('https://weather.tsukumijima.net/api/forecast/city/270000')
      .then(res => res.json())
      .then(data => weatherState.osaka = data);

    // 広島の天気 広島
    fetch('https://weather.tsukumijima.net/api/forecast/city/340010')
      .then(res => res.json())
      .then(data => weatherState.hiroshima = data);

    // 福岡の天気 ホークス
    fetch('https://weather.tsukumijima.net/api/forecast/city/400010')
      .then(res => res.json())
      .then(data => weatherState.fukuoka = data);

    // 宮城の天気 楽天
    fetch('https://weather.tsukumijima.net/api/forecast/city/040010')
      .then(res => res.json())
      .then(data => weatherState.miyagi = data);

    // 北海道の天気 日ハム
    fetch('https://weather.tsukumijima.net/api/forecast/city/016010')
      .then(res => res.json())
      .then(data => weatherState.hokkaido = data);

  });

  return {
    weatherState
  };
};