firebase.auth().onAuthStateChanged(async function(user) {
  if (user) {
    // Signed in
    let db = firebase.firestore()

    db.collection('users').doc(user.uid).set({
      name: user.displayName,
      email: user.email
    })

    document.querySelector('form').addEventListener('submit', async function(event) {
      event.preventDefault()

      let userclassesText = document.querySelector('#userclasses').value

      if (userclassesText.length > 0) {
        let docRef = await db.collection('userclasses').add({
          text: userclassesText,
          userId: user.uid
        })

        let userclassId = docRef.id
        console.log(`new user class with ID ${userclassId} created`)

        document.querySelector('.userclasses').insertAdjacentHTML('beforeend', `
          <div class="userclasses-${userclassId} py-4 text-xl border-b-2 border-blue-500 w-full">
            <a href="#" class="done p-2 text-sm bg-blue-500 text-white">X</a>
            ${userclassesText}
          </div>
        `)

        document.querySelector(`.userclasses-${userclassId} .done`).addEventListener('click', async function(event) {
          event.preventDefault()
          document.querySelector(`.userclasses-${userclassId}`).classList.add('opacity-20')
          await db.collection('userclasses').doc(userclassId).delete()
        })
        document.querySelector('#userclasses').value = ''
      }
    })

    let querySnapshot = await db.collection('userclasses').where('userId', '==',user.uid).get()
    console.log(`Number classes in collection: ${querySnapshot.size}`)

    let userclasses = querySnapshot.docs
    for (let i=0; i<userclasses.length; i++) {
      let userclassid= userclasses[i].id
      let userclass = userclasses[i].data()
      let userclassText = userclass.text

      document.querySelector('.userclasses').insertAdjacentHTML('beforeend', `
        <div class="userclasses-${userclassid} py-4 text-xl border-b-2 border-blue-500 w-full">
          <a href="#" class="done p-2 text-sm bg-blue-500 text-white">X</a>
          ${userclassText}
        </div>
      `)

      document.querySelector(`.userclasses-${userclassid} .done`).addEventListener('click', async function(event) {
        event.preventDefault()
        document.querySelector(`.userclasses-${userclassid}`).classList.add('opacity-20')
        await db.collection('userclasses').doc(userclassid).delete()
      })
    }
    
    document.querySelector('.search').addEventListener('submit', async function(event) {
      event.preventDefault()
      let searchText = document.querySelector('.search').value

      let querySnapshot = await db.collection('userclasses').get()

      let userclasses = querySnapshot.docs
      for (let i=0; i<userclasses.length; i++) {
        let classId = userclasses[i].id
        let userclass = userclasses[i].data()
        let userclassText = userclass.text
        if (searchText == userclassText) {

        document.querySelector('.search').insertAdjacentHTML('beforeend', `
          <div class="todo-${classId} py-4 text-xl border-b-2 border-purple-500 w-full">
            <a href="#" class="done p-2 text-sm bg-green-500 text-white">✓</a>
            ${userclassText}
          </div>
        `)
        } 
      } 


      console.log('.search click')
      



    })



    document.querySelector('.sign-in-or-sign-out').innerHTML = `
      <button class="text-pink-500 underline sign-out">Sign Out</button>
    `

    document.querySelector('.sign-out').addEventListener('click', function(event) {
      console.log('sign out clicked')
      firebase.auth().signOut()
      document.location.href = 'index.html'
    })


    console.log('signed in')
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