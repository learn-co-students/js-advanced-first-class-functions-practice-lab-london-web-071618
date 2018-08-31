// Code your solution in this file!


  const logDriverNames = (drivers) => {
    drivers.forEach(function (driver) {
      console.log(driver.name);
    });
  };

  const logDriversByHometown = (drivers, location) =>
      drivers.forEach(driver => {
        if (driver.hometown === location)
        console.log(driver.name)
      })

  const driversByRevenue = drivers => {
    const numSorter =  (a, b) => a.revenue - b.revenue

    let newArr = []
    for (let key of drivers) {
      newArr.push(key)
    }
    return newArr.sort(numSorter)
  }

  const driversByName = drivers => {
      let newArr = []
      for (let key of drivers) {
        newArr.push(key)
      }
      newArr.sort(function(a, b) {
        return (a.name.localeCompare(b.name));
    })
    return newArr
  }


  const totalRevenue = drivers => {
      return drivers.reduce(function(total, currentDriver) {
        return currentDriver.revenue + total
      }, 0);
      }

  const averageRevenue = drivers => totalRevenue(drivers) / drivers.length
  
