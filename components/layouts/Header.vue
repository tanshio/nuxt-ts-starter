<template lang="pug">
  header
    h1 Header
    ul
      li
        <nuxt-link :to="switchLocalePath('ja')">ja</nuxt-link>
      li
        <nuxt-link :to="switchLocalePath('en')">en</nuxt-link>

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>
