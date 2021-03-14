firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
      // Signed in
      let db = firebase.firestore()
  
      db.collection('users').doc(user.uid).set({
        name: user.displayName,
        email: user.email
      })
  
   //Adds a button for each class in class database   

   let response = await fetch(`/.netlify/functions/classes`)
    let classArray = await response.json()
    let response2 = await fetch(`/.netlify/functions/ClassTaken`)
    let students = await response2.json()
  // let querySnapshot = await db.collection('userclasses').get()
  // let classArray = querySnapshot.docs 
  for (let i=0; i<classArray.length; i++) {
    let course = classArray[i]
    let className = course.name
    let classId = course.id
    
    let names = students[i].student
    //console.log(classArray[i].data())
    document.querySelector('.userclasses').insertAdjacentHTML('beforeend', `
    <div class="kclass py-4 text-xl w-full">
      <a id=${classId} href="#" class="taken p-2 text-sm bg-green-500 text-white">${className}</a>
    </div>
  `)
  document.querySelector(`#${classId}`).addEventListener('click', async function(event) {
    event.preventDefault()
    // let docRef = await db.collection('userclasses').doc(`${classId}`).get()
    document.querySelector('.userlist').innerHTML = 
     `
    <div class="kclass py-4 text-xl w-full">
      <a id=${classId} href="#" class="taken p-2 text-sm bg-green-500 text-white">${names}</a>
    </div> `

  })
  
  document.querySelector('.sign-in-or-sign-out').innerHTML = `
  <button class="text-pink-500 underline sign-out">Sign Out</button>
  `
  
  document.querySelector('.sign-out').addEventListener('click', function(event) {
  console.log('sign out clicked')
  firebase.auth().signOut()
  document.location.href = 'index.html'
  
  })
}
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