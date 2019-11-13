import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import GAuth from 'vue-google-oauth2';
import 'animate.css/animate.css';
import VueCookies from 'vue-cookies';


Vue.use(VueCookies);

Vue.config.productionTip = false;

const gauthOption = {
    clientId: '43097138818-6lf1t46gvg8njgg8bq6vvep3gs9oobts.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}
Vue.use(GAuth, gauthOption);

const Vu = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
});
Vu.$mount('#app')

export { Vu }