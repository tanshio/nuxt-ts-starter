<template>
  <section>
    <div>
      <div class="l-container">
        {{ todoList }}

        <div class="l-row">
          <div class="l-col--12-12 l-col--md-6-12">aaa</div>
          <div class="l-col--12-12 l-col--md-6-12">
            <card />
            <app-button text="aaa" />
            <div :class="{ control: true }">
              <div>
                <input
                  v-validate="'required|email'"
                  :class="{ input: true, 'is-danger': errors.has('email') }"
                  name="email"
                  type="text"
                  placeholder="Email"
                />
              </div>

              <span v-show="errors.has('email')" class="help is-danger">{{
                errors.first('email')
              }}</span>
            </div>
          </div>

          <div v-for="(t, index) in todoList" :key="index">
            {{ t.id }}
          </div>
          aaaccc
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
import Vue, { PropType } from 'vue'
import AppButton from '../../atoms/Button/index.vue'
import { TodoType } from '../../../store/todo/state'
import Card from '~/src/components/Card.vue'
import Test from '~/src/components/Test.vue'



export default Vue.extend({
  components: {
    AppButton,
    Card,
  },
  props: {
    todoList: {
      type: Array as PropType<TodoType[]>,
      default: () => [],
    },
  },
  methods: {
    test() {
      this.$
    },
  },
})
</script>
