import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'fa'
  },
  theme: {
    colors: {
      primary: '#7BC6FF'
    },
    navigator: {
      background: '#F2F2F2'
    }
  }
});
