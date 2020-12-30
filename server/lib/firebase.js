const firebase = require('firebase/app');
require('firebase/auth');
const firebaseConfig = {
    apiKey: 'AIzaSyA0VN4ADjPc5qTkBOCToH6wTrpN87wdOIc',
    authDomain: 'next-app-3d2e1.firebaseapp.com',
    projectId: 'next-app-3d2e1',
    storageBucket: 'next-app-3d2e1.appspot.com',
    messagingSenderId: '741773069747',
    appId: '1:741773069747:web:c6d82ed03e72dbe266cfc6'
};
firebase.initializeApp(firebaseConfig);
module.exports = firebase;
