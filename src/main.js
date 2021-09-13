import App from "./App.vue";
import { createApp } from "vue";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import router from "./router";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDU3AcFP1rCt_u_lAmNVlVQnhDOoXR2Pos",
    authDomain: "flaze-97f0e.firebaseapp.com",
    projectId: "flaze-97f0e",
    storageBucket: "flaze-97f0e.appspot.com",
    messagingSenderId: "241829748316",
    appId: "1:241829748316:web:b66db0f0481fc5a8439099",
    measurementId: "G-W30H1MK5VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount("#app");
