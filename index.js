firebase.auth().onAuthStateChanged(async function(user) {
  if (user) {
    // Signed in
    let db = firebase.firestore()

    db.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email
    })

 //Adds a button for each class in class database   
//let querySnapshot = await db.collection('userclasses').get()
//let classArray = querySnapshot.docs 
let response = await fetch(`/.netlify/functions/classes`)
    let classArray = await response.json()

for (let i=0; i<classArray.length; i++) {
  let course = classArray[i]
  let className = course.name
  let classId = course.id
 
  document.querySelector('.userclasses').insertAdjacentHTML('beforeend', `
  <div class="kclass py-4 text-xl w-full">
    <a id=${classId} href="#" class="taken p-2 text-sm bg-green-500 text-white">${className}</a>
  </div>
`)

 for(let j=0; j<myclass.attendees.length; j++) {
  let student = myclass.attendees[j]
  console.log(`${student} is ${user.displayName}?`)
  if(student == user.displayName){
   document.querySelector(`#${classId}`).classList.add('opacity-20')
 }
  } 
  
document.querySelector(`#${classId}`).addEventListener('click', async function(event) {
  event.preventDefault()


//////////////////////////DANNY's CODE/////////////
let response = await fetch ('http://localhost:50948/.netlify/functions/course',{
  method: 'Post',
  body: JSON.stringify({
    classId: classId,
    className:className,
    userId: user.uid
  })
})
console.log(response)

let json= await response.json()

//////////////////////////DANNY'S CODE//////////////////////////////////
  let docRef = await db.collection('userclasses').doc(classId).update({
  attendees: firebase.firestore.FieldValue.arrayUnion(`${user.displayName}`)  
  })
  document.querySelector(`#${classId}`).classList.add('opacity-20')
 //await db.collection('userclasses').doc(`${classId}-${user.uid}`).set({})
  })

}





document.querySelector('.sign-in-or-sign-out').innerHTML = `
<button class="text-pink-500 underline sign-out">Sign Out</button>
`

document.querySelector('.sign-out').addEventListener('click', function(event) {
console.log('sign out clicked')
firebase.auth().signOut()
document.location.href = 'index.html'

})


//add user id when class button is clicked


    console.log('.singed in')
} else {
    // Signed out
    console.log('signed out')
  





    // Initializes FirebaseUI Auth
    let ui = new firebaseui.auth.AuthUI(firebase.auth())

    // FirebaseUI configuration
    let authUIConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: 'index.html'
    }

 

    // Starts FirebaseUI Auth
    ui.start('.sign-in-or-sign-out', authUIConfig)
  }
})
//Just testing (Danny)