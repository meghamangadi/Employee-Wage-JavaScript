console.log("Welcome to the Employee Wage Computation Program");


const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let empDailyWageArray = new Array();
let totalEmpHrs = 0;
let totalWorkigDays = 0;
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();

function getWorkingHrs(employeeCheck) {
    switch (employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}


while (totalEmpHrs < MAX_WORKING_HOURS && totalWorkigDays < MAX_WORKING_DAYS) {
    totalWorkigDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHrs(employeeCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateWage(empHrs));
}
function calculateWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}
let empWage = totalEmpHrs * WAGE_PER_HR;
console.log("Daily Employee Wage stored in an Array:\n" + empDailyWageArray);
console.log(" Total Employee Wage is: " + empWage + "\n  Total Employee Work Hours: " + totalEmpHrs
    + "\n Total Working Days: " + totalWorkigDays);

//  For Each Method
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("\nUsing ForEach Loop, Total Wage: " + totalEmpWage);

// using Reduce Method
let totalEmpWages = 0;
function totalWages(totalEmpWages, dailyWage) {
    return totalEmpWages + dailyWage;
}
let totalEmpWageUsingReduce = empDailyWageArray.reduce(totalWages, 0);
console.log("\nUsing Reduce Method, Total Wage: " + totalEmpWageUsingReduce);

//  Showing Day and DailyWage Using MAP helper function

let counter = 0;
function dayAndDailyWageMap(dailyWage) {
    counter++;
    return "Day" + counter + " -> " + dailyWage;
}
let dayAndDailyWageMapArray = new Array();
dayAndDailyWageMapArray = empDailyWageArray.map(dayAndDailyWageMap);
console.log("\nUsing Map Printing Day with DailyWage.\n");
console.log(dayAndDailyWageMapArray);

//  Filter function

function fullTimeWageDay(dailyWage) {
    return dailyWage.includes("160");
}
let fullTimeWageArray = dayAndDailyWageMapArray.filter(fullTimeWageDay);
console.log("\nUsing Filter Storing Only FullTimewage into Array\n");
console.log(fullTimeWageArray);

// Find function

let fullTimeWageFirstOccurance = dayAndDailyWageMapArray.find(fullTimeWageDay);
console.log("\nfirst Occurence of Full Time Wage(160) on :\n");
console.log(fullTimeWageFirstOccurance);

// Using Every function

console.log("Is fulltimeWageArray truely holds fulltime Wage: " + fullTimeWageArray.every(fullTimeWageDay));

// Check for PartTime Wage 

function partTimeWageDay(dailyWage) {
    return dailyWage.includes("80");
}

console.log("Checking for parttimeWage(80) in map Array Present or not:\n" + dayAndDailyWageMapArray.some(partTimeWageDay));

let partTimeWageArray = dayAndDailyWageMapArray.filter(partTimeWageDay);
console.log("Part timeWage Days:\n" + partTimeWageArray);
console.log("Is parttimeWageArray truely holds Parttime Wage: " + partTimeWageArray.every(partTimeWageDay));

let partTimeWageFirstOccurance = dayAndDailyWageMapArray.find(partTimeWageDay);
console.log("\nfirst Occurence of Part Time Wage(80) on :");
console.log(partTimeWageFirstOccurance);

//  The Number of Days Employee Worked 


function totalFullTimeWorked(numOfFullTimeDays, dailyWage) {
    if (dailyWage == 160)
        return numOfFullTimeDays + 1;
    return numOfFullTimeDays;
}
function totalPartTimesWorked(numOfPartTimeDays, dailyWage) {
    if (dailyWage == 80)
        return numOfPartTimeDays + 1;
    return numOfPartTimeDays;
}

let partTimeWorkedDays = empDailyWageArray.reduce(totalFullTimeWorked, 0);
console.log("Employee Worked Part time for " + partTimeWorkedDays + " Days");
let fullTimeWorkedDays = empDailyWageArray.reduce(totalPartTimesWorked, 0);
console.log("Employee Worked Full time for " + fullTimeWorkedDays + " Days");
let totalDaysWorked = fullTimeWorkedDays + partTimeWorkedDays;
console.log("Employee Total Worked  for " + totalDaysWorked + " Days");


// Storing Day , DailyWage along With Total Wage in a Map

console.log(empDailyWageMap);
function totalWages(totalWages, dailyWage) {
    return totalWages + dailyWage;
}

console.log("Employee Wage Map totalHours: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));


// calculate totalWage and total hours worked using arrow function 


let findTotal = (totalVal, currentVal) => {
    return totalVal + currentVal;
}

console.log("Employee Daily Hours map")
console.log(empDailyHoursMap);
console.log(Array.from(empDailyHoursMap.values()).reduce(findTotal, 0));

console.log("Employee Daily Wage map")
console.log(empDailyWageMap);
console.log(Array.from(empDailyWageMap.values()).reduce(findTotal, 0));