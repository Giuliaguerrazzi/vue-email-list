
const app = new Vue({
    el: '#app',
    data: {
        mails: [],
    },
    created: function() {
        const self = this;

        for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {
                
                self.mails.push(response.data.response);
            console.log(response);
            })
            .catch(function (error) {
                alert(error);
            console.log(error);
         })
        }
        
    }
});