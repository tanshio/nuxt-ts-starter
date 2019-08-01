import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Button from './atoms/button/index.vue'

storiesOf('Button', module).add('default', () => ({
  components: { Button },
  template: `<div><Button text="default" @click="action" />aaa</div>`,
  methods: {
    action() {
      console.log('aaa')
    },
  },
}))
