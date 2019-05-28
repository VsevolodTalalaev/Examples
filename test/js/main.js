


new Vue ({
    el: '#app',
    data: {
        show: false,
        message: 'Hello',
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "Audi", speed: 240.21},
            {model: "Mers", speed: 350.4},
            {model: "Ford", speed: 160.5},
        ]
        
    },
    computed: {
        showMess () {
            return this.message.toUpperCase ();
        }
    },
    filters: {
        lowercase (value) {
            return value.toLowerCase();
        }
    }


});