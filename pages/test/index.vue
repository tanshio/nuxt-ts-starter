<i18n src="./test.json" />
<i18n src="../common.json" />
<template>
  <section>
    <div>
      <div>
        <p>{{ $t('heading') }}</p>
        <p>{{ $t('common') }}</p>
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
