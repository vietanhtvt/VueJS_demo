<template>
  <div class="modal-content">
    <div class="alert">
      aleart message
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: null
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
    opacity: 1;
  }
</style>
