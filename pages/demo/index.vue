<i18n>
{
  "en": {
    "heading": "英語"
  },
  "ja": {
    "heading": "日本語"
  }
}
</i18n>
<template>
  <section>
    <div>
      <div>
        <p>{{ $t('heading') }}</p>
      </div>
      <div>
        <n-link :to="localePath('index')">index</n-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { namespace } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'

const Todo = namespace('todo')

@Component({
  components: {
  },
})
export default class IndexPage extends Vue {
  mounted() {
    console.log('mount')
  }
}
</script>
