import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCToSH418CI58Q5w74SkbhkEQxhAhjfZ5Y",
  projectId: "ostler-myapp",
  databaseURL: 'https://ostler-myapp.firebaseio.com/'
};

export const initFirebase = () => {
  firebase.initializeApp(config);
};