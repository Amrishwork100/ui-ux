
var student = {
    name: "Scott",
    age: 40,
    getStudentName: function () {
        student.name = "John"
        console.log(`Hey my name is : ${student.name}`)
        console.log(this)
    },
    getStudentAge: () => {
        student.age++
        console.log(`Hey my name is : ${student.age}`)
        console.log(this)
    }

}

function m1() {
    console.log("Example of set timeout for functin m1() outside the object using this keyword...")
    console.log(this)
}
function m2() {
    console.log("Regular Function of this keyword......")
    console.log(this)
}

setTimeout(student.getStudentName, 5000)
setTimeout(student.getStudentAge, 5000)
setTimeout(m1, 5000)
m2()