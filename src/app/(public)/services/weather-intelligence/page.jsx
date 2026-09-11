"use client";

import { useState } from "react";

import {
  searchLocation,
  getWeather,
} from "@/libs/weather";

import {
  generateAgriculturalInsights,
} from "@/libs/agriculturalInsights";

export default function WeatherIntelligencePage() {
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);

  const [selectedLocation, setSelectedLocation] =
    useState(null);

  const [weather, setWeather] = useState(null);
  const [insights, setInsights] = useState([]);

  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);

  const [error, setError] = useState("");

  async function handleSearch(event) {
    event.preventDefault();

    if (!location.trim()) return;

    try {
      setSearching(true);
      setError("");
      setLocations([]);

      const results = await searchLocation(location);

      if (!results.length) {
        setError("No locations found.");
        return;
      }

      setLocations(results);
    } catch (error) {
      setError("Unable to search for this location.");
    } finally {
      setSearching(false);
    }
  }

  async function handleSelectLocation(place) {
    try {
      setLoading(true);
      setError("");

      setSelectedLocation(place);
      setLocations([]);

      const data = await getWeather(
        place.latitude,
        place.longitude
      );

      setWeather(data);

      const recommendations =
        generateAgriculturalInsights(data);

      setInsights(recommendations);
    } catch (error) {
      setError("Unable to load weather information.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="py-5">
        <div className="container">

          {/* Header */}
          <div className="site-heading text-center mb-5">
            <span className="text-success fw-bold">
              FARMVERSE INTELLIGENCE
            </span>

            <h1 className="title">
              Weather Intelligence
            </h1>

            <p className="text-muted">
              Make smarter agricultural decisions using
              real-time weather data and agricultural insights.
            </p>
          </div>

          {/* Location Search */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">

              <form onSubmit={handleSearch}>
                <div className="input-group input-group-lg">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter farm location..."
                    value={location}
                    onChange={(e) =>
                      setLocation(e.target.value)
                    }
                  />

                  <button
                    type="submit"
                    className="btn btn-success px-4"
                    disabled={searching}
                  >
                    {searching
                      ? "Searching..."
                      : "Search"}
                  </button>

                </div>
              </form>

              {/* Search Results */}
              {locations.length > 0 && (
                <div className="list-group shadow-sm mt-2">

                  {locations.map((place) => (
                    <button
                      key={`${place.id}-${place.latitude}`}
                      type="button"
                      className="list-group-item list-group-item-action"
                      onClick={() =>
                        handleSelectLocation(place)
                      }
                    >
                      <strong>
                        {place.name}
                      </strong>

                      <small className="d-block text-muted">
                        {place.admin1
                          ? `${place.admin1}, `
                          : ""}
                        {place.country}
                      </small>
                    </button>
                  ))}

                </div>
              )}

            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="alert alert-danger text-center">
              {error}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="text-center py-5">
              <div
                className="spinner-border text-success"
                role="status"
              />

              <p className="mt-3 text-muted">
                Loading weather intelligence...
              </p>
            </div>
          )}

          {/* Weather Dashboard */}
          {weather && selectedLocation && (
            <>
              <WeatherOverview
                weather={weather}
                location={selectedLocation}
              />

              <AgriculturalInsights
                insights={insights}
              />

              <SevenDayForecast
                weather={weather}
              />
            </>
          )}

        </div>
      </section>
    </main>
  );
}
function WeatherOverview({ weather, location }) {
  const current = weather.current;

  return (
    <section className="mb-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="mb-1">
            {location.name}
          </h3>

          <p className="text-muted mb-0">
            {location.admin1
              ? `${location.admin1}, `
              : ""}
            {location.country}
          </p>
        </div>

        <span className="badge bg-success">
          Live Forecast
        </span>
      </div>

      <div className="row g-4">

        <WeatherMetric
          icon="fas fa-temperature-half"
          title="Temperature"
          value={`${Math.round(
            current.temperature_2m
          )}°C`}
        />

        <WeatherMetric
          icon="fas fa-droplet"
          title="Humidity"
          value={`${current.relative_humidity_2m}%`}
        />

        <WeatherMetric
          icon="fas fa-cloud-rain"
          title="Rain"
          value={`${current.rain} mm`}
        />

        <WeatherMetric
          icon="fas fa-wind"
          title="Wind"
          value={`${Math.round(
            current.wind_speed_10m
          )} km/h`}
        />

      </div>

    </section>
  );
}

function WeatherMetric({
  icon,
  title,
  value,
}) {
  return (
    <div className="col-md-6 col-lg-3">

      <div className="card border-0 shadow-sm h-100 p-4">

        <div
          className="bg-warning text-white rounded d-flex align-items-center justify-content-center mb-3"
          style={{
            width: 50,
            height: 50,
          }}
        >
          <i className={`${icon} fs-5`}></i>
        </div>

        <small className="text-muted">
          {title}
        </small>

        <h3 className="mb-0 mt-1">
          {value}
        </h3>

      </div>

    </div>
  );
}

function AgriculturalInsights({ insights }) {
  return (
    <section className="mb-5">

      <div className="site-heading mb-4">
        <span className="text-success fw-bold">
          FARM INTELLIGENCE
        </span>

        <h3 className="title">
          Agricultural Insights
        </h3>
      </div>

      <div className="row g-4">

        {insights.map((insight, index) => (
          <div
            className="col-md-6 col-lg-4"
            key={`${insight.category}-${index}`}
          >

            <div className="card border-0 shadow-sm h-100 p-4">

              <div className="d-flex align-items-center mb-3">

                <div
                  className={`rounded d-flex align-items-center justify-content-center me-3 ${
                    insight.type === "warning"
                      ? "bg-warning"
                      : "bg-success"
                  }`}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                >
                  <i
                    className={`${insight.icon} text-white`}
                  ></i>
                </div>

                <div>
                  <small className="text-muted">
                    {insight.category}
                  </small>

                  <h5 className="mb-0">
                    {insight.title}
                  </h5>
                </div>

              </div>

              <p className="text-muted mb-0">
                {insight.message}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

function SevenDayForecast({ weather }) {
  const daily = weather.daily;

  return (
    <section>

      <div className="site-heading mb-4">
        <span className="text-success fw-bold">
          FORECAST
        </span>

        <h3 className="title">
          7-Day Weather Forecast
        </h3>
      </div>

      <div className="row g-3">

        {daily.time.map((date, index) => {

          const rain =
            daily.precipitation_probability_max[index];

          const rainfall =
            daily.precipitation_sum[index];

          return (
            <div
              className="col-12 col-md-6 col-lg"
              key={date}
            >

              <div className="card border-0 shadow-sm h-100 p-3">

                <small className="text-muted">
                  {new Date(date).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </small>

                <h4 className="mt-3 mb-2">
                  {Math.round(
                    daily.temperature_2m_max[index]
                  )}
                  ° /{" "}
                  {Math.round(
                    daily.temperature_2m_min[index]
                  )}
                  °
                </h4>

                <div className="mb-2">
                  <i className="fas fa-cloud-rain me-2 text-success"></i>
                  {rain}% rain
                </div>

                <div className="text-muted">
                  {rainfall} mm expected
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}