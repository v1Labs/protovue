import { shallowMount } from '@vue/test-utils';
import Cell from '@/components/Cell';

describe('Cell.vue', () => {
  it('should render h1 element', () => {
    const wrapper = shallowMount(Cell, {
      propsData: {},
      slots: {
        default: '<h1 />'
      }
    });
    expect(wrapper.findAll('h1')).toHaveLength(1);
  });
})
