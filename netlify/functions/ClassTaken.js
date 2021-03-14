let firebase = require('./firebase')

exports.handler = async function (event) {
    let ClassTaken = []

    let db = firebase.firestore()
   




    let querySnapshot = await db.collection('userclasses').get()
    let classArray = querySnapshot.docs
    for (let i = 0; i < classArray.length; i++) {
        let classId = classArray[i].id
        let myclass = classArray[i].data()
        let student = myclass.attendees


        ClassTaken.push({
            Id: classId,
            student:student
            
        })
        // for (let j = 0; j < myclass.attendees.length; j++) {
        //     let student = myclass.attendees
        //     ClassTaken.push({
                    
        //         student:student
                
        //     })


           
        // }
       
    }
   

    return {
        statusCode: 200,
        body: JSON.stringify(ClassTaken)
      }
    }


