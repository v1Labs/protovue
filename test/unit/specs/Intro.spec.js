import { shallowMount } from '@vue/test-utils';
import Intro from '@/components/Intro';

describe('Intro.vue', () => {
  it('should set title prop', () => {
    const wrapper = shallowMount(Intro, {
      propsData: {
        title: 'test title'
      }
    });
    expect(wrapper.props().title).toBe('test title');
  });

  it('should set version prop', () => {
    const wrapper = shallowMount(Intro, {
      propsData: {
        version: 'v2'
      }
    });
    expect(wrapper.props().version).toBe('v2');
  });
})
