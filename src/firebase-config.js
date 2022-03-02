import { initializeApp } from 'firebase/app';
// import {
//   apiKey,
//   authDomain,
//   projectId,
//   storageBucket,
//   messagingSenderId,
//   appId,
//   measurementId,
// } from '../.env';

import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'ua-legal-aid.firebaseapp.com',
  projectId: 'ua-legal-aid',
  storageBucket: 'ua-legal-aid.appspot.com',
  messagingSenderId: '195769234751',
  appId: '1:195769234751:web:af4d537b447f159caacf8a',
  measurementId: 'G-VEVL66NFKW',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
