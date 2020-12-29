import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from '../components/SwitchDemo.vue';
import ButtonDemo from '../components/ButtonDemo.vue';
import DialogDemo from '../components/DialogDemo.vue';
import TabsDemo from '../components/TabsDemo.vue';
import { h } from 'vue';
import Markdown from '../components/Markdown.vue';

// 传入 key 用于标识组件的唯一性，保证渲染不同的实例时会重走生命周期。
const md = (filename) =>
  h(Markdown, { path: `../markdown/${filename}`, key: filename });

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: 'intro',
          component: md('intro.md'),
        },
        {
          path: 'get-started',
          component: md('getstarted.md'),
        },
        {
          path: 'install',
          component: md('install.md'),
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
