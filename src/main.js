import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Pusher from "pusher-js";
import Echo from "laravel-echo";

window.Pusher = Pusher;

window.bliskSocket = new Echo({
  broadcaster: "pusher",
  key: "b.e.e.s.m.a.r.t",
  cluster: "mt1",
  wsHost: window.location.hostname,
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
});




createApp(App).mount('#app')
