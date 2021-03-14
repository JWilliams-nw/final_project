// API url to this lambda funtion: /.netlify/functions/course
let firebase = require('./firebase')

exports.handler = async function(event) {
    let db = firebase.firestore()

    let body = JSON.parse(event.body)
    let classId = body.classId
    let userDisplayname = body.userDisplayname
    let docRef = await db.collection('userclasses').doc(classId).update({
        attendees: firebase.firestore.FieldValue.arrayUnion(`${userDisplayname}`)
      })
//let course = JSON.parse(event.body)
 console.log(event)
 
    
   //await db.collection('userclasses').doc(`${classId}-${user.uid}`).set({})
    




    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true

        })
      }






}