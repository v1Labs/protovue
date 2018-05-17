import { shallowMount } from '@vue/test-utils';
import Image from '@/components/Image';

describe('Image.vue', () => {
  it('should be 100x100', () => {
    const wrapper = shallowMount(Image, {
      propsData: {
        width: '100px',
        height: '100px'
      }
    });
    const img = wrapper.find('.img');
    expect(img.attributes().style).toContain('width: 100px');
    expect(img.attributes().style).toContain('height: 100px');
  });

  it('should be round', () => {
    const wrapper = shallowMount(Image, {
      propsData: {
        round: true
      }
    });
    const img = wrapper.find('.img');
    expect(img.attributes().style).toContain('border-radius: 100%');
  });
})
