// API url to this lambda funtion: /.netlify/functions/course
let firebase = require('./firebase')

exports.handler = async function(event) {
    let db = firebase.firestore()



let course = JSON.parse(event.body)
console.log(course)

let classId= course.classId
let className= course.className
let userId= course.userId


console.log(` the course is ${classId}`)
console.log(` the name is ${className}`)
console.log(` the user is ${userId}`)

let querySnapshot = await db.collection('userclasses')
                      .where('classId','==',classId)
                      .where('userId','==',userId)
                      .get()

let numberofclasses= querySnapshot.size
console.log(`number of classis is ${numberofclasses}`)








    return {
        statusCode: 200,
        body: JSON.stringify({})
      }






}