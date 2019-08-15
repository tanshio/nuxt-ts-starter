import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import Page from './index.vue'

storiesOf('scroll-group', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      return {
        components: { Page },
        template: `<page />`,
      }
    },
    {
      info: {
        summary: 'Summary for MyComponent',
      },
    },
  )
