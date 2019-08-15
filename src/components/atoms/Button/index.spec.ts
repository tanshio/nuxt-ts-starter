import { shallowMount } from '@vue/test-utils'
import Button from './index.vue'

describe('Counter.vue', () => {
  it('click button and countup', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        text: 'aaa',
      },
    })
    expect(wrapper.props().text).toBe('aaaaaaa')
    expect(wrapper.text()).toMatch(`aaa`)
  })
})
