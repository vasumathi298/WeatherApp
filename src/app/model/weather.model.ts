export interface WeatherData {
    location: Location
    current_observation: CurrentObservation
    forecasts: Forecast[]
  }
  
  export interface Location {
    city: string
    region: string
    country: string
    lat: number
    long: number
    timezone_id: string
  }
  
  export interface CurrentObservation {
    wind: Wind
    atmosphere: Atmosphere
    astronomy: Astronomy
    condition: Condition
  }
  
  export interface Wind {
    chill: number
    direction: number
    speed: number
  }
  
  export interface Atmosphere {
    humidity: number
    visibility: number
    pressure: number
    rising: number
  }
  
  export interface Astronomy {
    sunrise: string
    sunset: string
  }
  
  export interface Condition {
    text: string
    temperature: number
  }
  
  export interface Forecast {
    day: string
    date: string
    low: number
    high: number
    text: string
  }
  