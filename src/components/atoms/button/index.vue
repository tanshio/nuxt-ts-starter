<template>
  <button :class="size" @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'primary',
    },
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
    },
  },
}
</script>
<style lang="scss" scoped>
button {
  appearance: none;
  background: #cc0000;
  color: #fff;
  text-align: center;
  display: inline-block;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  p {
    margin: 0;
  }
  &.sm {
    padding: 0.5rem 0.75rem;
  }
  &.large {
    padding: 2rem 3rem;
  }
}
</style>
