import Avatar from './components/Avatar';
import Cell from './components/Cell';
import Chart from './components/Chart';
import Footer from './components/Footer';
import Grid from './components/Grid';
import Image from './components/Image';
import Intro from './components/Intro';
import Nav from './components/Nav';
import Text from './components/Text';

const Protovue = {
  install(Vue, opt={}) {
    const color = opt.color || '#dce3e4';
    const background = opt.background || '#ffffff';
    Vue.component("v1-avatar", Avatar);
    Vue.component("v1-cell", Cell);
    Vue.component("v1-chart", Chart);
    Vue.component("v1-footer", Footer);
    Vue.component("v1-grid", Grid);
    Vue.component("v1-image", Image);
    Vue.component("v1-intro", Intro);
    Vue.component("v1-nav", Nav);
    Vue.component("v1-text", Text);

    Vue.mixin({
      created: function () {
        this.dark = lightenColor(color, -20);
        this.light = lightenColor(color, 20); //'rgba(50,50,50,.03)';
        this.color = color;
        this.gridBackground = background;
      }
    });
  }
};

// This function needs a different home
function lightenColor(col, amt) {
  let usePound = false;
  if (col[0] == "#") {
      col = col.slice(1);
      if (col.length == 2) {
        col = String(col) + String(col) + String(col);
      }
      if (col.length == 3) {
        col = String(col) + String(col);
      }
      usePound = true;
  }

  let num = parseInt(col,16);
  let r = (num >> 16) + amt;
  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  let b = ((num >> 8) & 0x00FF) + amt;
  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  let g = (num & 0x0000FF) + amt;
  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

export default Protovue;
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Protovue);
}
