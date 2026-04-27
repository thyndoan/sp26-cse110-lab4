let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2,
};
for (let prop in statistics) {
  //if value of property starts with 'r' or is an odd number, print out the value of the property
  if (prop[0] === "r" || statistics[prop] % 2 !== 0) {
    console.log(statistics[prop]);
  }
}
