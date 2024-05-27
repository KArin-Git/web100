const app = Vue.createApp({
    data () {
        // return Obj
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        };
    }
});
// specify the template to be used >> <section id="user-goal">
app.mount('#user-goal');