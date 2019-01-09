importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-messaging.js');
firebase.initializeApp({
    messagingSenderId: "your messagingSenderId again"
});
const messaging = firebase.messaging();