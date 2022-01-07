function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecord) {
    return employeeRecord.map((employee) => {
        return createEmployeeRecord(employee)
    }) 
}

function createTimeInEvent(timeStamp) {
    
    let [date, hour] = timeStamp.split(' ')
        this.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour, 10),
            date: date
        })
        return this
}

function createTimeOutEvent(timeStamp) {
    
    let [date, hour] = timeStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

let hoursWorkedOnDate = function(date) {
    
    const inEvent = this.timeInEvents.find(event => event.date === date).hour
    
    const outEvent = this.timeOutEvents.find(event => event.date === date).hour
    
    return (outEvent - inEvent) / 100

}

let wagesEarnedOnDate = function(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function calculatePayroll(employeeRecords) {
    let sum = employeeRecords.reduce(function (acc, employeeRecord) {
       return acc + allWagesFor.call(employeeRecord)
    }, 0)
    return sum
}

function findEmployeeByFirstName(employeeRecords, firstName) {
    return employeeRecords.find(obj => {
        if (obj.firstName === firstName) {
            return obj
        }  
    });
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


