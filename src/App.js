import "./styles.css";

export default function App() {
  function getWeather() {
    var cityName = document.getElementById("fname").value;
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=304bcb2e9f6e45bdb15155347210912&q=" +
        cityName +
        "&aqi=no"
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        document.getElementById("temp_c").innerHTML =
          data.current.temp_c + "°C";
        document.getElementById("condition").innerHTML =
          data.current.condition.text;
        document.getElementById("localtime").innerHTML =
          data.location.localtime;
      });
  }

  return (
    <div className="App">
      <div className="main">
        <h1 id="title">Weather App</h1>

        <p1 id="temp_c">0</p1>
        <br />
        <p1 id="condition">Condition</p1>
        <br />
        <p1 id="localtime">2022-01-08 9:23</p1>
        <br />
        <br />
        <br />
        <form>
          <label for="fname">City Name</label>
          <input type="text" id="fname" name="fname" />
        </form>
        <br />
        <button class="button" type="button" onClick={getWeather}>
          Get Weather
        </button>
      </div>
    </div>
  );
}
