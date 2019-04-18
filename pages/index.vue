<template>
  <section>
    <div>
      <div>
        Nuxt TypeScript Starter{{counter}}
      </div>
      <div>
        <app-button text="aaa"></app-button>
        <card></card>
      </div>
    </div>
  </section>
</template>

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
