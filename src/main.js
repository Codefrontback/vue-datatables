// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//import vue-table-2
import { ServerTable } from 'vue-tables-2';
Vue.use(ServerTable);

//top-progress bar
import vueTopprogress from 'vue-top-progress'
Vue.use(vueTopprogress);

//axios
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);

//axios progress-bar
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';
Vue.use(loadProgressBar);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
