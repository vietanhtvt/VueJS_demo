
<template>
  <div id = "watch_props">
    Kilometers :  <input type="text" v-model="kilometters" >
    Meters :  <input type="text" v-model="metters" >

    Question: <input type="text" v-model="question" >
    <p>{{ answer }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  el: '#watch_props',
  data () {
    return {
      name: 'helloworld',
      kilometters: 0,
      metters: 0,
      question: '',
      answer: 'Không thể trả lời nếu bạn chưa đặt câu hỏi!'
    }
  },
  methods: {
    getrandomno1: function () {
      return Math.random()
    },

    // _.debounce là một hàm do Lodash cung cấp
    // Để tìm hiểu rõ hơn cách hoạt động của hàm này,
    // bạn có thể truy cập: https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Câu hỏi thì thường chứa một dấu "?" ;-)'
          return
        }
        this.answer = 'Đang suy nghĩ...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Lỗi! Không thể truy cập API. ' + error
          })
      },
      // Đây là thời gian (đơn vị mili giây) chúng ta đợi người dùng dừng gõ.
      500
    )
  },
  computed: {},
  watch: {
    kilometters: function (val) {
      this.kilometters = val
      this.metters = val * 1000
    },
    metters: function (val) {
      this.kilometters = val / 1000
      this.metters = val
    },
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Đang chờ bạn đặt xong câu hỏi...'
      this.getAnswer()
    }
  }
}

</script>
<style>

</style>
