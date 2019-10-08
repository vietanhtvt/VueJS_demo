<template>
<div id = "computed_props">
  <h1 style = "background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
  <h1>Random No from method: {{getrandomno1()}}</h1>
  <h1>Random No from method : {{getrandomno1()}}</h1>
  <h1  style = "background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
  <h1  style = "background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
  <h1  style = "background-color:gray;">Random No from computed
    property: {{getrandomno}}</h1>
  <h1>Random No from method: {{getrandomno1()}}</h1>
  <h1>Random No from method: {{getrandomno1()}}</h1>

  <input type = "text" v-model = "fullname" />
  <h1>{{firstName}}</h1>
  <h1>{{lastName}}</h1>

</div>
</template>
<script type = "text/javascript">
export default {
  el: '#computed_props',
  data () {
    return {
      name: 'helloworld',
      firstName: 'Terry23',
      lastName: 'Ben123'
    }
  },
  methods: {
    getrandomno1: function () {
      return Math.random()
    }
  },
  computed: {
    getrandomno: function () {
      return Math.random()
    },
    fullname: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (name) {
        var fname = name.split(' ')
        this.firstName = fname[0]
        this.lastName = fname[1]
      }
    }
  }
}
</script>
<style>

</style>
