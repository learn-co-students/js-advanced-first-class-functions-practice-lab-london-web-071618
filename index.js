// Code your solution in this file!

const logDriverNames = collection => {
  collection.forEach(function(el) {
    console.log(el.name)
  })
};

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
    console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
    return [...drivers].sort(function(a,b) {
     return a.revenue - b.revenue
  })
  }
  
function driversByName(drivers) {
    return [...drivers].sort(function(a,b) {
     return a.name.localeCompare(b.name)
  })
  }
  
  function totalRevenue(drivers) {
   return drivers.map(driver => driver.revenue).reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0)
  }
  
    function averageRevenue(drivers) {
    return totalRevenue(drivers)/(drivers.length)
  }