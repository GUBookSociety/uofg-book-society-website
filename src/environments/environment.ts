// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Current test database installed by contributor, can be changed later 
  firebase: {
    apiKey: "AIzaSyBhTzFioyRorGY-cM6OX3XhBuLieKu8Evo",
    authDomain: "gu-book-club-website.firebaseapp.com",
    databaseURL: "https://gu-book-club-website.firebaseio.com",
    projectId: "gu-book-club-website",
    storageBucket: "gu-book-club-website.appspot.com",
    messagingSenderId: "751265853101",
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
