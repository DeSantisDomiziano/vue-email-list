const { createApp } = Vue

createApp({
    data() {
      return {
        random_mail: [],
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
      }
    },
    mounted() {
        for(i = 0; i < 10; i++) {
            axios
            .get(this.url)
            .then(resp => {
                this.random_mail.push(resp.data.response)
            })
        }
    }
}).mount('#app')