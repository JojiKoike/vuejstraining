var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue.js!',
    list: ['りんご', 'バナナ', 'いちご'],
    count: 0,
    show: true
  },
  computed: {
    computedMessage: function () {
      return this.message + '!'
    }
  },
  methods: {
    handleClick: function(event) {
      alert(event.target)
    }
  }
})
console.log(app.message)
console.log(app.list)