import { createApp, h } from 'vue';
import Dialog from './Dialog.vue';
export const openDialog = (options) => {
  const { title, content, ...rest } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ...rest,
        },
        // 注意，此处 title 和 content 都是插槽，需要注意传递的值需要是个函数
        { title, content },
      );
    },
  });
  app.mount(div);
};
