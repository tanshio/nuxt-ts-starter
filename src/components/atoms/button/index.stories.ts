import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  select,
  array,
  optionsKnob as options,
} from '@storybook/addon-knobs'
import Button from './index.vue'

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      const label = 'Colors'
      const options = {
        Red: 'red',
        Blue: 'blue',
        Yellow: 'yellow',
        Rainbow: ['red', 'orange', 'etc'],
        None: null,
      }
      const defaultValue = 'red'
      const groupId = 'GROUP-ID1'

      const value = select(label, options, defaultValue, groupId)
      return {
        components: { Button },
        template: `<div><Button :text="btnText" @click="onClick" /></div>`,
        props: {
          btnText: {
            default: value,
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
  .add(
    'size',
    () => {
      const label = 'Button size'
      const valuesObj = {
        sm: 'sm',
        primary: 'primary',
        large: 'large',
      }
      const defaultValue = 'primary'
      const optionsObj = {
        display: 'select',
      }
      const groupId = 'GROUP-ID1'

      const value = options(label, valuesObj, defaultValue, optionsObj, groupId)
      return {
        components: { Button },
        template: `<div><Button :text="btnText" :size="size" @click="onClick" /></div>`,
        props: {
          btnText: {
            default: value,
          },
          size: {
            default: value,
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
