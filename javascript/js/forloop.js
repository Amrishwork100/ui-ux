var employee = {
    id:101,
    name: "Allen",
    age: 30,
    email: "allen@gmail.com"
}
function printEmployee(){
    for( let emp in employee){
        console.log(employee[emp])
    }
}
printEmployee();
