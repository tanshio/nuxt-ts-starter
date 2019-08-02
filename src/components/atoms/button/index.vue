<template>
  <div @click="handleClick">
    <p>{{ text }}</p>
  </div>
</template>

<script>
// import { Vue, Component, Prop } from 'vue-property-decorator'
//
// export type textType = 'aaa' | 'bbb'
//
// @Component
// export default class Button extends Vue {
//   @Prop(String) text!: textType
//
//   onClick() {
//     this.$emit('click', 'aaaa');
//   }
// }

import Vue from 'vue'

export default {
  props: {
    text: String,
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
div {
  background: red;
}
</style>
