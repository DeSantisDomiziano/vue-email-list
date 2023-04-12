const { createApp } = Vue

createApp({
    data() {
      return {
        random_mail: [],
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
      }
    },
    methods: {
      generate_email(n_email) {
        for(i = 0; i < n_email; i++) {
          axios
            .get(this.url)
            .then(resp => {
                this.random_mail.push(resp.data.response)
            })
        }
      }
    },
    mounted() {
      this.generate_email(10)
    }
}).mount('#app')