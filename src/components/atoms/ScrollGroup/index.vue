<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
    }"
  >
    <slot :count="count"></slot>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      required: true,
    },
    delay: {
      type: Number,
      default: 200,
      required: true,
    },
  },
  data() {
    return {
      count: 0,
      isVisible: false,
      timer: null,
      old: 0,
    }
  },
  beforeDestroy() {
    this.clear()
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible
      if (this.isVisible) {
        this.count++
        this.old = performance.now()
        this.countUp()
      }
    },
    loop() {},
    countUp() {
      this.timer = requestAnimationFrame(() => {
        const now = performance.now()
        if (now - this.old > this.delay || this.old === 0) {
          this.old = now
          this.count++
          if (this.count >= this.max) {
            this.clear()
            return
          }
        }
        this.countUp()
      })
    },
    clear() {
      console.log('clear')
      cancelAnimationFrame(this.timer)

    },
  },
}
</script>
