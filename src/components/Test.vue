<template>
  <div>
    <p>{{text}}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop(String) text!: string
}
</script>
