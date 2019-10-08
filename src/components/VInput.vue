<template>
  <input :value="value" @input="onInput" />
</template>

<script>
  export default {
    props: {
      value: {
        type: String
      }
    },
    methods: {
      onInput (evnt) {
        this.$emit("input", evnt.target.value);
      }
    }
  }
</script>
