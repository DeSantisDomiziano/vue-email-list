const { createApp } = Vue

createApp({
    data() {
      return {
        random_mail: [],
        url: 'https://flynn.boolean.careers/exercises/api/random/mail'
      }
    },
    mounted() {
        axios
        .get(this.url)
        .then(resp => {
            console.log(resp.data.response);
            for(i=0; i < 10; i++) {
                this.random_mail.push(resp.data.response)
            }
        })
    }
}).mount('#app')