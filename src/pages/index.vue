<template>
  <index :todo-list="todoGetters" />
</template>

<script lang="ts">
import Vue from 'vue'
import Index from '../components/pages/index.vue'
import todoGetters from '../store/todo/getters'
export default Vue.extend({
  components: { Index },
  computed: {
    todoGetters() {
      return todoGetters.todoLList()
    },
  },
  methods: {},
})
</script>
