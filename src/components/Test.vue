<template lang="pug">
  div
    p {{text}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop(String) text!: string
}
</script>
