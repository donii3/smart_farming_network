export function generateAgriculturalInsights(weather) {
  const current = weather.current;
  const daily = weather.daily;

  const insights = [];

  const temperature = current.temperature_2m;
  const humidity = current.relative_humidity_2m;

  const rainProbability =
    daily.precipitation_probability_max?.[0] ?? 0;

  const rainfall =
    daily.precipitation_sum?.[0] ?? 0;

  const wind =
    current.wind_speed_10m ?? 0;

  /*
   * PLANTING
   */
  if (rainProbability >= 60 && rainfall >= 5) {
    insights.push({
      type: "positive",
      category: "Planting",
      title: "Favourable planting conditions",
      message:
        "Rainfall is expected, which may provide suitable soil moisture for planting. Consider completing field preparation before the expected rainfall.",
      icon: "fas fa-seedling",
    });
  } else if (rainProbability < 30 && rainfall < 2) {
    insights.push({
      type: "warning",
      category: "Planting",
      title: "Limited rainfall expected",
      message:
        "Low rainfall is expected. Consider irrigation or delaying moisture-dependent planting until adequate soil moisture is available.",
      icon: "fas fa-seedling",
    });
  }

  /*
   * IRRIGATION
   */
  if (rainfall < 2 && rainProbability < 40) {
    insights.push({
      type: "warning",
      category: "Irrigation",
      title: "Consider irrigation",
      message:
        "Forecast rainfall is limited. Crops may require supplemental irrigation depending on crop type, soil moisture and growth stage.",
      icon: "fas fa-tint",
    });
  }

  /*
   * SPRAYING
   */
  if (
    rainProbability < 30 &&
    humidity < 80 &&
    wind < 20
  ) {
    insights.push({
      type: "positive",
      category: "Crop Protection",
      title: "Potential spraying window",
      message:
        "Current conditions may be suitable for agricultural spraying. Always verify the product label and local agronomic recommendations before application.",
      icon: "fas fa-spray-can",
    });
  } else {
    insights.push({
      type: "warning",
      category: "Crop Protection",
      title: "Check conditions before spraying",
      message:
        "Humidity, wind or rainfall conditions may reduce spraying effectiveness. Consider monitoring conditions before applying crop protection products.",
      icon: "fas fa-spray-can",
    });
  }

  /*
   * HARVEST
   */
  if (rainProbability < 30 && rainfall < 3) {
    insights.push({
      type: "positive",
      category: "Harvest",
      title: "Generally favourable harvest weather",
      message:
        "The forecast indicates relatively dry conditions that may be favourable for harvesting and field activities.",
      icon: "fas fa-tractor",
    });
  }

  /*
   * WIND
   */
  if (wind >= 30) {
    insights.push({
      type: "warning",
      category: "Field Operations",
      title: "Strong winds expected",
      message:
        "Strong winds may affect spraying, irrigation equipment and exposed crops. Exercise caution during field operations.",
      icon: "fas fa-wind",
    });
  }

  /*
   * HEAT
   */
  if (temperature >= 35) {
    insights.push({
      type: "warning",
      category: "Heat Stress",
      title: "High temperature",
      message:
        "High temperatures may increase crop water demand and heat stress. Monitor soil moisture and crop condition closely.",
      icon: "fas fa-temperature-high",
    });
  }

  return insights;
}