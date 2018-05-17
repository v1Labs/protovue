import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer';

describe('Footer.vue', () => {
  it('should render 4 link element', () => {
    const wrapper = shallowMount(Footer, {
      propsData: {
        links: 4
      }
    });
    expect(wrapper.findAll('.link')).toHaveLength(4);
  });
})
