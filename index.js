// Code your solution in this file!
const callback = function (el, i, arr) {
  console.log(el["name"])
}
function logDriverNames(arrayDrivers) {
  arrayDrivers.forEach(callback)
}

function logDriversByHometown(arrayDrivers, arg) {
  let newArray = arrayDrivers.filter(driverEntry => {return driverEntry["hometown"] === arg})
  newArray.forEach(driverHash => { console.log(driverHash["name"])});
}

function driversByRevenue(arrayDrivers) {
  newArr = arrayDrivers.slice()
  const comparator = function (a, b) {
    return a.revenue - b.revenue;
};
  return newArr.sort(comparator)
}

function driversByName(arrayDrivers) {
  newArr = arrayDrivers.slice()
  const comparator = function (a, b) {
    return a.name.localeCompare(b.name);
  };
  return newArr.sort(comparator)
}

function totalRevenue(arrayDrivers) {
  const calcRevenue = function (agg, el, i, arr) {
    return agg + el.revenue
  }
  return arrayDrivers.reduce(calcRevenue, 0)
}

function averageRevenue(arrayDrivers) {
  const calcAvg = function (agg, el, i, arr) {
    return (agg + el.revenue)
  }
  return arrayDrivers.reduce(calcAvg, 0)/arrayDrivers.length
}
