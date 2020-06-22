// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // Current test database installed by contributor, can be changed later 
    firebase: {
        apiKey: "AIzaSyDHagqU2-Yvm0hKH7Qlks--sQrUBPz_N1A",
        authDomain: "gu-book-soc-testing.firebaseapp.com",
        databaseURL: "https://gu-book-soc-testing.firebaseio.com",
        projectId: "gu-book-soc-testing",
        storageBucket: "gu-book-soc-testing.appspot.com",
        messagingSenderId: "100713771406",
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
  