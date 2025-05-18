import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AlgorithmList from '../AlgorithmList.vue'

describe('AlgorithmList', () => {
  it('renders a list of algorithms', () => {
    const algorithms = [
      { id: '1', name: 'Test Alg', moves: "R U R' U'" },
      { id: '2', name: 'Another Alg', moves: 'R2 U2' },
    ]
    const wrapper = mount(AlgorithmList, { props: { algorithms } })
    expect(wrapper.text()).toContain('Test Alg')
    expect(wrapper.text()).toContain("R U R' U'")
    expect(wrapper.text()).toContain('Another Alg')
    expect(wrapper.text()).toContain('R2 U2')
  })
})
