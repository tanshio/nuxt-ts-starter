<i18n src="./index.json" />
<i18n src="./common.json" />
<template>
  <section>
    <div>
      <div>
        <p>{{ $t('hello') }}</p>
        <p>{{ $t('common') }}</p>
      </div>
      <div>
        <n-link :to="localePath('test')">test</n-link>
      </div>
      <div class="l-container">
        <div class="l-row">
          <div class="l-col--12-12 l-col--md-6-12">aaa</div>
          <div class="l-col--12-12 l-col--md-6-12">aaa</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.l-row {
  object-fit: contain;
  font-family: var(--g-font-san);
  @media (--v-md) {
    background: red;
  }
  & div {
    background: #fff;
  }
}
</style>

<script lang="ts">
import { namespace } from 'vuex-class'
import { Component, Vue } from 'vue-property-decorator'
import Card from '../components/Card.vue'
import AppButton from '../components/Button.vue'
import { TodoGettersInterface } from '../store/todo/getters'
import { TodoMutationInterface } from '../store/todo/mutations'

const Todo = namespace('todo')

@Component({
  components: {
    Card,
    AppButton,
  },
})
export default class IndexPage extends Vue {
  @Todo.Getter counter!: TodoGettersInterface['counter']
  @Todo.Mutation add!: TodoMutationInterface['add']

  increment(num: number) {
    this.add(num)
  }
}
</script>
