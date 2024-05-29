const app = Vue.createApp ({
    data () {
        return {
            name: "Arin Apichitchon",
            age: 29,
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
        };
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },
        randomNum() {
            return Math.random();
        }
    }
});

app.mount('#assignment');