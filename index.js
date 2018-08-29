// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

// const logDriversByHometown = function(drivers, hometown) {
//   drivers.forEach(function(driver) {
//     if (driver.hometown === hometown) {
//       console.log(driver.name)
//     }
//   })
// }
const logDriversByHometown = (drivers, hometown) => {
  drivers.forEach(
    driver => { if (driver.hometown === hometown) console.log(driver.name) }
  )
}

const sortByKey = (arrayOfObjects, key) => {
  return arrayOfObjects.slice().sort((a, b) => a[key] - b[key])
}
const driversByRevenue = drivers => sortByKey(drivers, 'revenue')


const sortByKeyWithLocaleCompare = (arrayOfObjects, key) => {
  return arrayOfObjects.slice().sort((a, b) => a[key].localeCompare(b[key]))
}
const driversByName = drivers => sortByKeyWithLocaleCompare(drivers, 'name')


const totalRevenue = function(drivers) {
  let total = 0
  drivers.forEach(
    (driver) => total = total + driver.revenue
  )
  return total
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
