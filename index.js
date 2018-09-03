// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown){
  drivers.forEach(function (driver){
    if (driver.hometown === hometown){
      console.log(driver.name)
      }
    }
  )
}

function driversByRevenue(drivers){
  let newArr = []
  const comparator = function(a, b){
    return a.revenue - b.revenue
  }

  for (let key of drivers){
    newArr.push(key)
  }

  return newArr.sort(comparator)

}

function driversByName(drivers){
  let newArr = []
  const comparator = function (a, b) {
    return a.name.localeCompare(b.name)
  }

  for (let key of drivers){
    newArr.push(key)
  }

return(newArr.sort(comparator))

}


function totalRevenue(drivers){
  let totalRevenue = 0

  for (const key of drivers){
    totalRevenue += key.revenue
  }
  return totalRevenue
}


function averageRevenue(drivers){
  return totalRevenue(drivers) / (drivers.length)
}
