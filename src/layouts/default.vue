<template>
  <div class="container">
    <app-header />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '../components/layouts/Header.vue'
import Footer from '../components/layouts/Footer.vue'

@Component({
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
})
export default class DefaultLayout extends Vue {}
</script>
