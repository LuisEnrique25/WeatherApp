export const kelvinToCelsius = (temp) => {
    return `${(temp - 273.15).toFixed(1)}°C`
}

export const kelvinToFarenheit = (tempk) => {
    return `${((tempk -273.15) * (9/5) +32).toFixed(1)}°F`;
}