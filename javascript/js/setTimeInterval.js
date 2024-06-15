

var employee = {
    name: "test",
    salary: "50000",
    getEmployeeName: function () {
        console.log("get the employee name")
        console.log(this)
    }
}

function m1() {
    console.log("Hello Everyone.....")
}
const stopTime = setInterval(employee.getEmployeeName, 5000);

function stopTimeInterval() {
    clearInterval(stopTime);
}
stopTimeInterval();


