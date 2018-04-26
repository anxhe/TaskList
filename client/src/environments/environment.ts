// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBzuIv9oDyb6E1x0lzwrLk18NMvTYX9nfE',
    authDomain: 'tasklist-98d3b.firebaseapp.com',
    databaseURL: 'https://tasklist-98d3b.firebaseio.com',
    projectId: 'tasklist-98d3b',
    storageBucket: 'tasklist-98d3b.appspot.com',
    messagingSenderId: '867382012050'
  }
};

