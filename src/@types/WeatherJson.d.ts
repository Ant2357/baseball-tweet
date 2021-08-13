// json2tsを使用(http://json2ts.com/)
export interface Description {
  publicTime: Date;
  publicTimeFormatted: string;
  headlineText: string;
  bodyText: string;
  text: string;
}

export interface Detail {
  weather: string;
  wind: string;
  wave: string;
}

export interface Min {
  celsius: string;
  fahrenheit: string;
}

export interface Max {
  celsius: string;
  fahrenheit: string;
}

export interface Temperature {
  min: Min;
  max: Max;
}

export interface ChanceOfRain {
  T00_06: string;
  T06_12: string;
  T12_18: string;
  T18_24: string;
}

export interface Image {
  title: string;
  url: string;
  width: number;
  height: number;
}

export interface Forecast {
  date: string;
  dateLabel: string;
  telop: string;
  detail: Detail;
  temperature: Temperature;
  chanceOfRain: ChanceOfRain;
  image: Image;
}

export interface Location {
  area: string;
  prefecture: string;
  district: string;
  city: string;
}

export interface Image2 {
  title: string;
  link: string;
  url: string;
  width: number;
  height: number;
}

export interface Provider {
  link: string;
  name: string;
  note: string;
}

export interface Copyright {
  title: string;
  link: string;
  image: Image2;
  provider: Provider[];
}

export interface RootObject {
  publicTime: Date;
  publicTimeFormatted: string;
  publishingOffice: string;
  title: string;
  link: string;
  description: Description;
  forecasts: Forecast[];
  location: Location;
  copyright: Copyright;
}
