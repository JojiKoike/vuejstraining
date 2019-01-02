var app = new Vue({
  el: '#app',
  data: {
    message: {
      value: 'Hello, Vue.js!',
      scroll: 0
    },
    list: ['綾瀬はるか', '土屋太鳳', '深田恭子'],
    num: 1
  },
  mounted: function(){
    this.scroll = 100;
  }
});