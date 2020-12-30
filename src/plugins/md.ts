import path from 'path';
import fs from 'fs';
import marked from 'marked';

const mdToJs = (str) => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};

export default function () {
  // 开发模式
  const configureServer = [
    async ({ app }) => {
      app.use(async (ctx, next) => {
        if (ctx.path.endsWith('.md')) {
          ctx.type = 'js';
          const filePath = path.join(process.cwd(), ctx.path);
          ctx.body = mdToJs(fs.readFileSync(filePath).toString());
        } else {
          await next();
        }
      });
    },
  ];
  // 生产模式，
  // 参考 https://github.com/vitejs/vite/blob/master/src/node/config.ts
  const transforms = [
    {
      test: (ctx) => ctx.path.endsWith('.md'),
      transform: ({ code }) => mdToJs(code),
    },
  ];
  return { configureServer, transforms };
}
