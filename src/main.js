import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import em from "./eventHub";

Vue.config.productionTip = false;

// handle errors
window.onerror = event => {
    console.log(event);
    em.emit('error', event);
};
// handle rejected promises
window.addEventListener('unhandledrejection', function (event) {
    //event.promise contains the promise object
    //event.reason contains the reason for the rejection
    console.log(event);
    em.emit('error', event);
});


new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')

Vue.mixin({
    methods: {
        humanFileSize: function (size) {
            var i = Math.floor(Math.log(size) / Math.log(1024));
            return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
        }
    },
})
