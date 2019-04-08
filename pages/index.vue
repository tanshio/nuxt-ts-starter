<template lang="pug">
  section
    div
      div Nuxt TypeScript Starter{{counter}}
      div
        button(@click="increment(2)") Counts
        app-button(text="text")
        card
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
