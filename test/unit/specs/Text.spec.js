import { shallowMount } from '@vue/test-utils';
import Text from '@/components/Text';

describe('Text.vue', () => {
  it('should set rows prop', () => {
    const wrapper = shallowMount(Text, {
      propsData: {
        rows: 7
      }
    });
    expect(wrapper.props().rows).toBe(7);
  });
})
