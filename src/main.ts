import '@/setup';
import Koa from 'koa';
import Router from 'koa-router';
import WechatSign from '@jswork/wechat-signature';

const port = nx.$conf.get('server.port');
const appConfig = nx.$conf.get('app');
const wechatSign = new WechatSign(appConfig);
const app = new Koa();
const router = new Router({ prefix: '/wxapi' });

router.get('/ok', (ctx) => {
  ctx.body = { status: 200, data: 'ok' };
});

router.get('/jsticket', async (ctx) => {
  const { url } = ctx.query;
  if (!url) return (ctx.body = { status: 500, data: 'url is required!' });
  const res = await wechatSign.get(url);
  ctx.body = { status: 200, data: res };
});

// 将路由挂载到 Koa 应用
app.use(router.routes());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
