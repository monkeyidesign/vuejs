Vue.component('app-dev', {
    template: '#devs-template',
    props: {
        name: {
            type: String,
            //required: true
        }
    }
});
Vue.component('blog-post', {
    // camelCase in JavaScript
    props: ['my_property_name'],
    template: '<h3>{{ my_property_name }}</h3>'
});

new Vue({
    el: '#app',
    data: {
        devs: ['Vue', 'WordPress', 'Flutter']
    }
})