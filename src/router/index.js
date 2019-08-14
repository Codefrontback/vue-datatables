import Vue from 'vue'
import Router from 'vue-router'
import Datatable from '@/components/Datatable.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'datatable',
            component: Datatable
        }
    ]
})
