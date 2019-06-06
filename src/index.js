import Vue from 'Vue'

import AppComponent from './App/index.vue'

const vm = new Vue({
    el: '#app',
    components: {
        app: AppComponent
    },
    render: h => h('app'),
});
