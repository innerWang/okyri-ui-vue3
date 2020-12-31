import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from '../components/ButtonDemo.vue';
import DialogDemo from '../components/DialogDemo.vue';
import TabsDemo from '../components/TabsDemo.vue';
import { h } from 'vue';
import Markdown from '../components/Markdown.vue';

import intro from '../markdown/intro.md';
import install from '../markdown/install.md';
import getstarted from '../markdown/getstarted.md';

// 传入 key 用于标识组件的唯一性，保证渲染不同的实例时会重走生命周期。
const md = (content, key) => h(Markdown, { content, key });

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        // "/doc" 的路由跳转到 "/doc/intro"
        {
          path: '',
          redirect: '/doc/intro',
        },
        {
          path: 'intro',
          component: md(intro, 'intro'),
        },
        {
          path: 'get-started',
          component: md(getstarted, 'getstarted'),
        },
        {
          path: 'install',
          component: md(install, 'install'),
        },
        {
          path: 'switch',
          component: SwitchDemo,
        },
        {
          path: 'button',
          component: ButtonDemo,
        },
        {
          path: 'dialog',
          component: DialogDemo,
        },
        {
          path: 'tabs',
          component: TabsDemo,
        },
      ],
    },
  ],
});

export default router;
