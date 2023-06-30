# Weather App {JavaScript}

A weather app web application using Javascript, HTML, CSS and API.
You can find the current weather condition as well as the forecast for up to 3 days. You can search with cities name for getting latest & updated details. I have used this [API](https://www.weatherapi.com/) to get latest weather data.

## Acknowledgements

- [Weather API](https://www.weatherapi.com/)

## API Reference

#### Get Current Data

```http
  GET https://api.weatherapi.com/v1/current.json?key=apikey}&q=${cityname}&aqi=no
```

| Parameter  | Type     | Description                |
| :--------- | :------- | :------------------------- |
| `api_key`  | `string` | **Required**. Your API key |
| `cityname` | `string` | **Required**. A City Name  |

#### Get Forecast Data

```http
  GET https://api.weatherapi.com/v1/forecast.json?key=apikey}&q=${cityname}&days=3&aqi=no
```

| Parameter  | Type     | Description                |
| :--------- | :------- | :------------------------- |
| `api_key`  | `string` | **Required**. Your API key |
| `cityname` | `string` | **Required**. A City Name  |

## Authors

- [Upendra Kumar](https://www.github.com/Kr-Upendra)

## Contributing

Contributions are always welcome!


## Features

- Fully Responsive
- Uses Current Data

## Installation

Install and run in your local enviroment

1. Clone the Repository

```bash
  git clone https://github.com/Kr-Upendra/100-JavaScript-Beginners-Projects.git
```

2. Navigate to the project directory you want to explore:

```bash
  cd 100-JavaScript-Beginners-Projects/weather-app
```

3. Install the project dependencies using npm or yarn.

```bash
  npm i
```

4. Run npm command to run the app

```bash
  npm run dev
```

5. Navigate to this url

```
http://localhost:5173/
```

## Please Use your API Key

To run this project you need an api key find api key [here](http://localhost:5173/) by registering
