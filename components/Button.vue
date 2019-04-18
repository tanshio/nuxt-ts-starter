<template>
  <div @click="onClick">
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
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

export default Vue.extend({
  props: {
    text: String
  },
  methods: {
    increment() {
      this.$store.increment()
    }
  },
  computed: {
    count(): number {
      return this.$store.state.count
    }
  }
})
</script>
<style lang="scss" scoped>
div {
  background: red;
}
</style>
