import '@/setup';
import Koa from 'koa';
import Router from 'koa-router';
import WechatSign from '@jswork/wechat-signature';

const port = nx.$conf.get('server.port');
const appConfig = nx.$conf.get('app');
const app = new Koa();
const router = new Router();
const wechatSign = new WechatSign(appConfig);

router.get('/wxapi/ok', (ctx) => {
  ctx.body = { status: 200, data: 'ok' };
});

router.get('/wxapi/jsticket', async (ctx) => {
  const { url } = ctx.query;
  const res = await wechatSign.get(url);
  ctx.body = { status: 200, data: res };
});

// 将路由挂载到 Koa 应用
app.use(router.routes());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
