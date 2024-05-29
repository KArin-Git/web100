const app = Vue.createApp({
    data () {
        // return Obj
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
// specify the template to be used >> <section id="user-goal">
app.mount('#user-goal');