console.log('Hello World!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: ''
        }
    }
}).mount ('#app')
