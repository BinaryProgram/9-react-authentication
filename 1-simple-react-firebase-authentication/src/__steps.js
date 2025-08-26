/*
     ____________________

     Initial Installation
     ____________________      
    1 - visit: console.firebase.google.com
    2 - create project (skip google analytics)
    3 - registser app (create config)
    4 - install firebase: npm install firebase
    5 - add config file to your project
    6 - danger💀: Do not publish or make firebase config to public by pushing those to github
    ______________________

       Intregration
    ______________________     
    7 - visit: Go to docs > build > authentication > Web > get started
    8 - export app from the firebase.config.js file: export default app
    9 - login.jsx: import getAuth from firebase/auth
    10 - create const auth = getAuth(app)
    _______________________

    Provider setup
    ________________________
    11 - import googleAuthProvider and create a new provider
    12 - use signInWithPopUp and pass auth and provider.
    13 - activate sign-in method (google,facebook,github,etc)
    14 - domain: authentication domain should be localhost
    ________________________
    
    More auth provider
    ________________________
    1. activate the auth provider (create app,provide redirect url, client id, client secret)
    
*/