<template>
  <div class="modal-content">
    <div class="alert" v-show="alertvisible" >
      {{message}}
      <button @click="onClose">X</button>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    message: String,
    isShow: Boolean
  },
  data () {
    return {
      close: false
    }
  },
  computed: {
    alertvisible () {
      return this.isShow && !this.close
    }
  },
  methods: {
    onClose () {
      this.close = true
    }
  }
}
</script>

<style>
  .alert{
    width: 20%;
    height: 70px;
    background: aquamarine;
    border: 1px solid black;
    margin-right: 20px;
    position:absolute;
    top:0;
    right:0;
  }
</style>
