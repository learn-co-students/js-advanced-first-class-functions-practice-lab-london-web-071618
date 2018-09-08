// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
   return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (arg) {
    return (function () {return arg  * arg})
}

const fareDoubler = function (arg) {
    return arg * 2
}

const fareTripler = function (arg) {
    return arg * 3
}

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}

