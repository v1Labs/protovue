import Grid from './components/Grid';
import Cell from './components/Cell';
import Text from './components/Text';

const Protovue = {
  install(Vue) {
    Vue.component("p-grid", Grid);
    Vue.component("p-cell", Cell);
    Vue.component("p-text", Text);
  }
};

export default Protovue;
export { Grid, Cell, Text };

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Protovue);
}
