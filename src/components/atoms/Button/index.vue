<template>
  <div @click="handleClick">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
      this.$router
    },
  },
}
</script>
<style lang="scss" scoped>
div {
  background: red;
}
</style>
