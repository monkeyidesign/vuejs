Vue.component('app-counter',{
    template: '#x-template-sample',
    data(){
        return{
            count:0
        }
    }

})
new Vue({
    el: '#app'
})