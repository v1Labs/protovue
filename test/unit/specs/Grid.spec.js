import { shallowMount } from '@vue/test-utils';
import Grid from '@/components/Grid';

describe('Grid.vue', () => {
  it('should render 2 columns and 4 rows', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        guides: true,
        size: '2x4'
      }
    });
    expect(wrapper.findAll('.guide-x')).toHaveLength(3); // 1 fewer guide
    expect(wrapper.findAll('.guide-y')).toHaveLength(1);
  });

  it('shouldnt show guides', () => {
    const wrapper = shallowMount(Grid, {
      propsData: {
        guides: false
      }
    });
    expect(wrapper.findAll('.guide-x')).toHaveLength(0);
    expect(wrapper.findAll('.guide-y')).toHaveLength(0);
  });
})
