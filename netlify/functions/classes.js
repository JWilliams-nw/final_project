let firebase = require('./firebase')

exports.handler = async function(event) {
  let classes = [] // sample only...

  let db = firebase.firestore()
  let querySnapshot = await db.collection('userclasses').get()
let classArray = querySnapshot.docs 
for (let i=0; i<classArray.length; i++) {
  let course = classArray[i]
  let className = course.data().name
  let classId = course.id
  let myclass = classArray[i].data()
  
  
  classes.push({
    name: className,
    id: classId
  })
}













  return {
    statusCode: 200,
    body: JSON.stringify(classes)
  }
}