// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}
  
function logDriversByHometown(drivers, driverLocation) {
  drivers.forEach(function (driver) {
    if (driver.hometown === driverLocation) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (firstDriver, secondDriver) {
    return firstDriver.revenue - secondDriver.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function (firstDriver, secondDriver) {
    return firstDriver.name.localeCompare(secondDriver.name)
  })
}
  
function totalRevenue(drivers) {
  return drivers.reduce(function (total, driver) {
    return driver.revenue + total 
  }, 0 )
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
