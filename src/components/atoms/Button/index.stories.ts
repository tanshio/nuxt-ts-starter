import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import Button from './index.vue'

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      return {
        components: { Button },
        template: `<div><Button :text="btnText" @click="onClick" />aaa</div>`,
        props: {
          btnText: {
            default: text('text', 'default'),
          },
        },
        methods: {
          onClick: action('clicked'),
        },
      }
    },
    {
      info: {
        summary: 'Summary for MyComponent',
      },
    },
  )
