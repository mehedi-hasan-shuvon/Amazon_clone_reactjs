/**
 * 1.create a new firebase project in console.firebase.google.com
 * 2.npm install firebase
 * 3.create firebase.init.js and import getAuth and export auth
 * 4. firebase setting >go to Authentication > enable email and password auth
 * 5.create login, sign up component,setup route
 * 6.attach form field handeler and form sublit handeler
 * 7.npm install --save react-firebase-hooks
 * 8.useCreateUserWithEmailAndPassword(auth) from react-firebase-hooks
 * 9.if user is created redirect to the expected page
 * 10. useSignInWithEmailAndPassword form react-firebase-hooks
 * 12.if user is created redirect to the expected page
 * 11.<RequireAuth> from protecting some page from react router authentication
 * 13.create requireAuth component==> check user exists,  also tract user location.
 * 14. in route wrap protected component by using require auth component.
 */

/**
 * optional:
 * hosting steps:
 * 1.npm install -g firebase-tools(one time for your computer)
 * 2.firebase login (one time for your computer)
 * 3.firebase init(one time each project)
 * 4.npm run build(every time you want to deploy)
 * 5.firebase deploy(every time you want to deploy)
 * 
 * ()
 */