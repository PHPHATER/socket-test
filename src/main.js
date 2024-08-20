import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Pusher from "pusher-js";
import Echo from "laravel-echo";

window.Echo = Echo
window.Pusher = Pusher;
// Echo.connector.pusher.config.
window.bliskSocket = new Echo({
  broadcaster: "pusher",
  key: "b.e.e.s.m.a.r.t",
  cluster: "mt1",
  wsHost: "1c37-78-154-187-7.ngrok-free.app",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
  authEndpoint: "https://1c37-78-154-187-7.ngrok-free.app/broadcasting/auth"
});
window.bliskSocket



createApp(App).mount('#app')
