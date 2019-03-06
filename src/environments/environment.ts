// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyD1LTBgyeiXkXxyP9jcEbuS9ggxkZp7Yu4",
    authDomain: "weatherapitesting-233608.firebaseapp.com",
    databaseURL: "https://weatherapitesting-233608.firebaseio.com",
    projectId: "weatherapitesting-233608",
    storageBucket: "weatherapitesting-233608.appspot.com",
    messagingSenderId: "229471231247"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
