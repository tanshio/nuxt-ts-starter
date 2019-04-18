import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Button from './Button.vue'

storiesOf('Button', module)
  .add('default', () => ({
    components: { Button },
    template: `<Button text="default" @click="action" />`,
    methods: { action: action('clicked') },
  }))
