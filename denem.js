function getWeather({ cityName }) {
  // var cityName = document.getElementById("fname").value;
  fetch(
    "https://api.weatherapi.com/v1/current.json?key=304bcb2e9f6e45bdb15155347210912&q=" +
      cityName +
      "&aqi=no"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      document.getElementById("temp_c").innerHTML = data.current.temp_c + "°C";
      document.getElementById("condition").innerHTML =
        data.current.condition.text;
      document.getElementById("localtime").innerHTML = data.location.localtime;
    });
}
