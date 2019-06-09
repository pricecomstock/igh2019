import C from "./constants";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export const getMonth = n => {
  return months[n];
};

export const calculatePopulation = (
  population,
  birthRate,
  deathRate,
  modifier
) => {
  const ppy = 12;
  const rateBase = 1000;
  const newPopulation = Math.floor(
    population +
      ((birthRate / rateBase) * population) / ppy -
      ((deathRate / rateBase) * population) / ppy
  );

  if (modifier) {
    newPopulation = modifier(newPopulation);
  }

  return newPopulation;
};

export const calculateBirthrate = (birthrate, foodP) => {
  return birthrate * (1 - (1 - foodP) * C.MONTHFACTOR);
  // return birthrate * ((1 / foodP - 1) * C.MONTHFACTOR + 1);
};
export const calculateDeathrate = (deathrate, foodP) => {
  return Math.max(
    C.MINIMUM_DEATH_RATE,
    deathrate * 1 + (1 - foodP) * C.MONTHFACTOR
  );
};

export const calculateCo2 = (co2, population) => {
  return co2 + population * C.POPULATION_CO2_FACTOR * C.MONTHFACTOR;
};
export const calculateFoodPercent = (foodP, temp) => {
  const foodDiff = Math.min(
    C.FOOD_DIFF_LIMIT - Math.abs(C.OPTIMAL_FOOD_TEMP - temp),
    1
  );
  return Math.min(1, foodP + foodDiff * C.FOOD_CHANGE_RATE * C.MONTHFACTOR);
};

export const calculateTemperature = (temp, co2) => {
  const co2Excess = Math.max(0, co2 - C.IDEAL_CO2);
  return temp + co2Excess * C.CO2_TEMP_FACTOR;
};
