//import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Avatar from '@/components/Avatar';

describe('Avatar.vue', () => {
  it('should render 1 avatar element', () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {}
    });
    expect(wrapper.findAll('.avatar')).toHaveLength(1);
  });

  it('should render 5 avatar elements', () => {
    const wrapper = shallowMount(Avatar, {
      propsData: {
        count: 5
      }
    });
    expect(wrapper.findAll('.avatar')).toHaveLength(5);
  })
})
