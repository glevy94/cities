const cities = [
  { name: 'Hilo', population: 44100 },
  { name: 'Honolulu', population: 350000 },
  { name: 'Kailua', population: 40500 },
  { name: 'Kaneohe', population: 37400 },
  { name: 'Pearl City', population: 46000 },
  { name: 'Waipahu', population: 43500 },
];

function averagePopulation(data) {
  return _.reduce(_.pluck(data, 'population'), function (memo, num) { return memo + num; }, 0) / data.length;
}

function biggestAndSmallest(data) {
  const biggest = _.max(data, function (city) { return city.population; });
  const smallest = _.min(data, function (city) { return city.population; });
  const big = biggest.name;
  const small = smallest.name;
  return `Biggest: ${big}; Smallest:${small}`;
}

console.log(averagePopulation(cities));
console.log(biggestAndSmallest(cities));
