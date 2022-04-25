import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDBc3iuKbxGZbjsIkSZjv5ugIEciWmAtXs',
  authDomain: 'mealstogo-7455a.firebaseapp.com',
  projectId: 'mealstogo-7455a',
  storageBucket: 'mealstogo-7455a.appspot.com',
  messagingSenderId: '302367989068',
  appId: '1:302367989068:web:521db2f37b6d9c38ccc3e9',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
