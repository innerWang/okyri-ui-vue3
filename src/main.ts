import './lib/okyri_base.scss';
import './index.scss';
import './assets/iconfont';
import 'github-markdown-css';
import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
