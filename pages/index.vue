<template lang="pug">
  section
    div
      div Nuxt TypeScript Starter{{counter}}
      div
        button(@click="increment(2)") Count
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '../components/Card.vue'
import { namespace } from 'vuex-class'
import { TodoGettersInterface } from '../store/todo/getters'
import { TodoMutationInterface } from '../store/todo/mutations'

const Todo = namespace('todo')

@Component({
  components: {
    Card,
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
