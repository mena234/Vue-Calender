import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBzWJ9TfUUu---aMLodGKNOJRWHQnC5urg",
  authDomain: "vue-calender-64039.firebaseapp.com",
  projectId: "vue-calender-64039",
  storageBucket: "vue-calender-64039.appspot.com",
  messagingSenderId: "435256128371",
  appId: "1:435256128371:web:a5d31813ed24dea1068b06"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
