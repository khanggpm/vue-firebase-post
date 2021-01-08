import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import { auth } from '../config/firebase'
import {
  Dialog,
  Button,
  Input,
  Select,
  Option,
  Tag,
  DatePicker,
  Pagination,
  Upload,
  Tooltip,
  Switch,
  Tabs,
  TabPane,
  Menu,
  MenuItem,
  Header
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'


//scss
import './assets/scss/app.scss'
//element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

locale.use(lang)
Vue.component(Dialog.name, Dialog);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Tag.name, Tag);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Pagination.name, Pagination);
Vue.component(Upload.name, Upload);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Switch.name, Switch);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Header.name, Header);

new Vue({
  ElementUI,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
