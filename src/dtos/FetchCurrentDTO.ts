import Clouds from './CloudsDTO';
import Coord from './CoordDTO';
import Main from './MainDTO';
import Weather from './WeatherDTO';
import Wind from './WindDTO';

export interface FetchCurrentDTO {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: Date;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
