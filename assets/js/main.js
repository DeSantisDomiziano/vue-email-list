const { createApp } = Vue

createApp({
    data() {
      return {
        random_mail: null,
        url: 'https://flynn.boolean.careers/exercises/api/random/mail'
      }
    },
    mounted() {
        axios
        .get(this.url)
        .then(resp => {
            console.log(resp);
        })
    }
}).mount('#app')