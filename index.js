function createEmployeeRecord(array) {
    return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
    }
}

function createEmployeeRecords(employee) {
    return employee.map(element => createEmployeeRecord(element))
}

function createTimeInEvent(employee, timeIn) {
    let recordIn = createEmployeeRecord(employee);
    recordIn.timeInEvents = [{
        type: "TimeIn",
        date: timeIn.slice(0,10),
        hour: parseInt(timeIn.slice(-4), 10)
        }]
    return recordIn
 }

function createTimeOutEvent(employee, timeOut) {
    let recordOut = createEmployeeRecord(employee);
      recordOut.timeOutEvents = [{
        type: "TimeOut",
          date: timeOut.slice(0,10),
          hour: parseInt(timeOut.slice(-4), 10)
        }]
      
      return recordOut
  }
  
function hoursWorkedOnDate(employee, date) {
    let emObj = createEmployeeRecord(employee)
    let inTime = createTimeInEvent(emObj, "0044-03-15 0900");
    let outTime = createTimeOutEvent(emObj, "0044-03-15 1100");
    if(inTime.timeInEvents[0].date === date) {
      let hourIn = inTime.timeInEvents[0].hour;
      let hourOut = outTime.timeOutEvents[0].hour;
      let hoursWorked = hourOut - hourIn;
    }
   
    return hoursWorked
  }

