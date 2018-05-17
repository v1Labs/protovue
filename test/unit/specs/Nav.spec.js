import { shallowMount } from '@vue/test-utils';
import Nav from '@/components/Nav';

describe('Nav.vue', () => {
  it('should set links prop', () => {
    const wrapper = shallowMount(Nav, {
      propsData: {
        links: 5
      }
    });
    expect(wrapper.props().links).toBe(5);
  });
})
