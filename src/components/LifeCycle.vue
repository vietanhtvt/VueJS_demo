<template>
  <div id="my-text">
    This is my text
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello World',
      counter: 0
    }
  },
  beforeCreate () {
    // Sẽ lỗi vì chưa thể tương tác được với dữ liệu trong data.
    console.log(this.message)
  },
  created () {
    // Ngay khi component được tạo, hàm created có thể được sử dụng để thao tác với các dữ liệu trong data và các sự kiện mà các bạn thiết lập đã có thể được kích hoạt.
    console.log(this.message)
    /* Nhưng template và DOM ảo chưa được mount và render, tức là nếu các bạn truy cập đến các phần tử trong DOM lúc này sẽ không được và báo lỗi */
    console.log(document.getElementById('my-text').innerHTML)

    // Chỉ có dòng in ra message trong data được thực hiện, còn việc truy cập vào phần tử my-text trên template sẽ báo lỗi.
  },

  beforeMount () {
    console.log(this)

    // beforeMount được gọi sau khi component đã được compile và trước lần render đầu tiên. Ở giai đoạn này khi các bạn truy cập đến các phần tử trong DOM vẫn sẽ báo lỗi
    console.log(document.getElementById('my-text').innerHTML)
  },

  mounted () {
    console.log(this.$el)
    console.log(document.getElementById('my-text').innerHTML)
  },

  beforeUpdate () {
    console.log(this.counter) // Logs the counter value every second, before the DOM updates.
  }
}
</script>

<style scoped>
</style>
